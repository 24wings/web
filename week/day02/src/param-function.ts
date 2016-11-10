var sayHello = function () {
    console.log('hello');
}

// () invoke 调用
var execute = function (func) {
    func();
}
execute(sayHello);