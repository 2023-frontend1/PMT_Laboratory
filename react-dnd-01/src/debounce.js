/**
 * @function
 * @param {callback} callback setTimeout후에 실행시킬 콜백함수
 * @param {number} delay setTimeout을 실행시킬 시간
 *
 * @description 인자로 함수와,딜레이시간을 받아 delay시간이끝나면 함수가 실행되게 지연시켜주는 함수
 */
const debounce = (callback, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => callback(...args), delay)
  }
}

export default debounce
