function operat (str) {
  if (str.length === 0 || str.length % 2 !== 0) return false
  let res = []
  let result
  let map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')

  for (let i = 0; i < str.length; i++) {
    let key = str[i]
    if (key === '{' || key === '(' || key === '[') {
      if (key === '{') {
        if (res.includes('(') || res.includes('['))
        return false
      } else if (key === '[') {
        if (res.includes('('))
        result = false
        return false
      } else {
        res.push(key)
      }
    } else if (key === '}' || key === ']' || key === ')') {
      let val = res.pop()
      if (map.get(val) !== key) {
        result = false
        return false
      } else {
        result = true
      }
    }
  }
  if (res.length) {
    result = false
  }
  return result
}


console.log(operat('{{()'))

// 如果有优先级 的情况  就是 只能 {{()}} 这种嵌套优先级