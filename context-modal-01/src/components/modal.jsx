import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Button from './button'

const PureModal = ({ onClose, text }) => {
  return (
    <PhotosensitiveContainer>
      <ContentCard>
        <MainContent>
          <ModalBody>{text}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>확인</Button>
          </ModalFooter>
        </MainContent>
      </ContentCard>
    </PhotosensitiveContainer>
  )
}

const Modal = ({ modalProps, onClose }) => {
  const isOpen = modalProps.isOpen
  const text = modalProps.text

  if (!isOpen) return

  return (
    <>
      {createPortal(
        <PureModal {...{ onClose, text }} />,
        document.getElementById('modal')
      )}
    </>
  )
}

export default Modal

/**
 * @description 모달 뒤의 배경을 어둡게 합니다.
 */
const PhotosensitiveContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #26262699;
`
/**
 * @description 실질적인 모달
 */
const ContentCard = styled.div`
  width: 40%;
  height: 50%;
  max-height: 60%;

  border-radius: 1rem;
  background-color: #262626;

  padding: 8px;
`
const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`
const ModalFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-self: end;
`
