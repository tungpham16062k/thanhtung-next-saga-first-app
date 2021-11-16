export function generateId(len = 40) {
  var arr = new Uint8Array((len) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}