
//@ts-check
//=>타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알리는 것
//JSDoc 코멘트:ts가 js파일을 확인해줌
/**
 * Initializes the project
 * @param {object} config //object를 변수로 받는데, 매개변수 이름이 config
 * @param {boolean} config.debug //config 객체안에는 boolean이 있다
*@param {string} config.url 
* @returns boolean
 */
export function init(config) {
  return true
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
  return code + 1;
}