export const cookie = function (key) {
  // Delete if array
  if (key instanceof Array) {
    return key.forEach(k => {
      return window.localStorage.removeItem(k)
    })
  }

  // set if object
  if (typeof key === 'object') {
    return Object.keys(key).forEach(k => {
      return window.localStorage.setItem(k, key[k])
    })
  }

  // if string, get
  return JSON.parse(window.localStorage.getItem(key) || false)
}
