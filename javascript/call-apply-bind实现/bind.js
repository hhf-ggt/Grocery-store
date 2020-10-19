// 会返回一个函数
Function.prototype.MyBind = function(content) {
   let that = this;
   let arr = Array.prototype.slice.call(arguments, 1);
   return function(arguments) {
       that.apply(obj, arr.concat([...arguments]));
   }
}