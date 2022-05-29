export default function(str, len) {
  if(str == null || !str.length) return ''
  if(str.length <= len) {
    return str
  } else {
    return str.slice(0, len)
  }
}
