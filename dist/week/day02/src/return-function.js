function doThing() {
    return function () {
        console.log('say hello');
    };
}
var something = doThing();
something();
function calc(action) {
    switch (action) {
        case 'add':
            return function (a, b) {
                return a + b;
            };
        case 'pow':
            return function (a, b) {
                return Math.pow(a, b);
            };
    }
}
var addFn = calc('add');
console.log(addFn(2, 3));
var powFn = calc('pow');
console.log(powFn(2, 3));
