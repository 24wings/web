// callback 回调
function A(callback) {
    console.log(callback);
    callback(); //B()
}
function B() {
    console.log('b');
}
A(B);
// =============
// sort(arrays,compareFn);
function C(func) {
    var a = 1, b = 2;
    func(a, b);
}
C(function (a, b) {
    console.log(a + b);
});
var arr = [2, 3, 9, 4, 5];
function compareTo(a, b) {
    return b - a;
}
arr.sort(compareTo);
console.log(arr);
