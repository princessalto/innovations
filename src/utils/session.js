export const session = function (key) {
  return JSON.parse(window.sessionStorage.getItem(key) || false)
}
