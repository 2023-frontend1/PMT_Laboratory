import { useRef, useState } from "react"
import "./App.css"
import debounce from "./debounce"

function App() {
  const dragItem = useRef() // 처음 드래그하는 아이템의 idx정보를 알기위해 선언
  const dragOverItem = useRef() // 새로들어올 아이템이 옮겨질 위치를 알기위해 선언
  const [list, setList] = useState([
    "1번아이템",
    "2번아이템",
    "3번아이템",
    "4번아이템",
    "5번아이템",
    "6번아이템",
    "7번아이템",
    "8번아이템",
  ])
  /**
   * @param {Event} e drag event
   * @param {number} position list.map 에서 idx를 받아와서 item idx추적
   * @description drag가 시작될때의 동작 정의 --> dragItem에 해당아이템의 idx를 저장,
   */
  const onDragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML, "drag 시작")
  }

  /**
   * @param {Event} e drag event
   * @param {number} position list.map 에서 idx를 받아와서 item idx추적
   * @description item이 겹쳐 질 때 동작 정의 --> 겹처진 item의 idx를 저장
   */
  const handleDragOver = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML, "drag 도착")
  }

  /**@description 과도한 event를 막기위해 debounce 적용 */
  const debounceHandleDragOver = debounce(handleDragOver, 500)

  const handleDrop = () => {
    const newList = [...list] // 복사본 배열 생성
    const dragItemValue = newList[dragItem.current] // drag하고싶은 item의 idx값으로 아이템의 value를 dragItemValue에 저장
    newList.splice(dragItem.current, 1) // target item 배열에서 삭제
    newList.splice(dragOverItem.current, 0, dragItemValue) // dragOver된 아이템 자리에 target Item넣기
    dragItem.current = null
    dragOverItem.current = null // ref값들 초기화
    setList(newList) // 위치가 이동 된 새로운 배열 newList setList해주고 렌더링 시킴
  }

  return (
    <>
      <h1>react-dnd없이 구현한 drag & drop</h1>
      {list.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "lightblue",
            margin: "20px 25%",
            textAlign: "center",
            fontSize: "40px",
          }}
          draggable
          onDragStart={(e) => onDragStart(e, idx)}
          onDragEnter={(e) => debounceHandleDragOver(e, idx)}
          onDragEnd={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {item}
        </div>
      ))}
    </>
  )
}

export default App
