var sayHello = function () {
    console.log('hello');
}

//  () invoke 调用 
/**
 * @param {Function} func 是一个函数参数
 */
var execute = function (func) {
    func();
}
execute(sayHello);