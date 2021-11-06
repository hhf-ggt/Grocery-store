/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length % 2 !== 0 || s.length === 0) return false
  let map = new Map([['{', '}'], ['(', ')'], ['[', ']']])
  let res = []
  for(let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          res.push(s[i])
      } else {
        if ( !res.length || map.get(res.pop()) !== s[i]) return false
      }
  }
  if (res.length) return false
  return true
};