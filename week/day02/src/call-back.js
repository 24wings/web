// 配置好环境,右键执行代码
/**
 * 讲解回调函数
 *
 */
var compare = function (a, b) {
    return a - b;
};
// 用compare比较a,b并返回结果
var compareToNumb = function (a, b, compare) {
    return compare(a, b);
};
//======================提高篇==========================
/**
 *  习题1. compare来编写自己的sort方法，实现数组的排序方式
 *  原本是
 *```javascript
 *  array.sort((a,b)=>{
 * return a-b;
 * })
 * ```
 * 后来是
 * ```javascript
 * sort(array,(a,b)=>{
 * return a-b;
 * })
 * ```
 */
var sort = function (nums, compare) {
    for (var i = 0; i < nums.length; i++) {
        if (compare(nums[i], nums[i + 1]) > 0) {
            var temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
        }
    }
    return nums;
};
var testArr = [2, 3, 10, 4, 9];
sort(testArr, function (a, b) {
    return a - b;
});
// 输出 [2,3,4,9,10]
console.log(testArr);
