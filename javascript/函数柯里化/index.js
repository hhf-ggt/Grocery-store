function uri_curring( protocol ) {
    // 返回一个函数
    return function (hostName, pathName) {
        return `${protocol}${hostName}${pathName}`
    }
}

// 这里我们用一个变量来接收返回来的函数
const uri_https = uri_curring('https://');

const uri2 = uri_https('www.baidu.com', '/百度');
const uri3 = uri_https('www.jd.com', '/京东');
console.log(uri2, uri3);




// add函数
function add() {
    let args = [...arguments];

    let innerFunc = function() {
        args.push(...arguments);
    }
    return innerFunc;
}

let outFunc = add(1);
console.log(outFunc(2))