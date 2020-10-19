### 改变this指向

function personal() {
    console.log(this.name);
     // 这里personal引用egg所以会将this绑定在egg对象上
    console.log(this);
    // 此处打印this我们可以看到this是指向egg对象的
}

let egg = {
    name: '学习call'
}

personal.call(egg);

当我们在personal上面调用call方法的时候 其实就是将 personal挂在到egg对象上如下
egg = {
    name: '学习call',
    personal: function() {
        console.log(this.name)
    }
}