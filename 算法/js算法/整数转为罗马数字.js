var intToRoman = function(num) {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  const res=[]
  for([value,symbol] of valueSymbols){
    console.log(value, num)
      while(num>=value){
          res.push(symbol)
          num-=value
      }
  }
  return res.join('')
};
console.log(intToRoman(850))
