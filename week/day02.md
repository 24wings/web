# Javascript 函数讲解
[MDN javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
> JavaScript ( JS ) 是一种轻量级，解释型的，有着 一等函数 (First-class Function) 的编程语言


**关键字:[First class Function](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)**
* 函数将被当作变量对待
* [可以作为参数传递](#param-function)
* [可以作为返回值被其他函数返回](#return-function)
* [可以被当作值指定给一个变量](#var-function)


### <span id="param-function">函数作为参数</span>

>通常作为参数的函数被称为回调函数(callback function)

[源代码](day02/src/test.ts)
```javascript
function compare(a,b){
        return a-b;
}

// 函数作为参数传入,通常用于回调,简称回调函数
var compareTwoNumb= function (a,b,compar){
    // 使用传入的函数
        compar(a,b);
}
 
compareTwoNumb(3,2,compare);

// 完成自己的array.sort()
```

### <span id="return-function">返回函数</span>
```javascript
function getSayHello(){
    // 返回一个sayHello 函数
    return  function (){
                console.log('hello');
    }
}

// 使用getSayHello函数,返回一个函数
var sayHello = getSayHello();
sayHello();

```
### <span id="var-function">函数被当作变量</span>
```javascript
var add =function(a,b){
    return a+b;
}

// 因为等价于 第一种创建方式,所以会覆盖第一种
function add(a,b){
    return a+b;
}
```

# 函数的使用方式
* [匿名函数](#no-name-function)
* [自执行函数](#auto-run-function)



### <span id="no-name-function">匿名函数</span>
```javascript
// 有名称引用的函数
var compare = function(a,b){
    return a-b;
}
var compareTwoNum=function(a,b,compare){
    return compare(a,b);
}
compareTwoNum(3,2,compare);

// 匿名函数,如果函数不是多次使用，匿名函数更加便利
var compareTwoNum=function(a,b,compare){
    return compare(a,b);
}
// 这里的函数没有名称,因此不可以被其他地方调用
compareTwoNum(3,2,function(){
    return a-b;
});

```
### <span id="auto-run-function">自执行函数</span>
```javascript
(function(){
    console.log('自动执行，无需调用');
})()
```


# es6 语法 与函数



# Console的用法
代码 | 含义
- | -
console.log() | 打印,调试
console.tree() | 会将对象所有的属性都呈现树状打印
console.assert() |  测试,是否结果为true
console.error()  | 打印错误
console.clear() | 控制台清除





# [es6箭头函数简介](http://es6.ruanyifeng.com/#docs/function#箭头函数)
```javascript
// es5 javascript function
var add = function (a,b){
    return a+b;
}

// 因为可以直接 返回 a+b,所以函数体和大括号也不需要
var add = (a,b)=>a+b;

var isBigThenFour=function (num){
    return num>4;
}

// 因为只有一个参数,可以省略掉圆括号
var isBigThenFour = num=>num>4;

```

有一点区别箭头函数与function函数
* this
在箭头函数中 this是指函数外面一层的对象,而在function 中 this是指当前的function函数对象
```javascript

```



    
[课后阅读:MDN函数的讲解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#定义函数(Defining_function))
