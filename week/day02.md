# Javascript 函数讲解
[MDN javascript]()
> JavaScript ( JS ) 是一种轻量级，解释型的，有着 一等函数 (First-class Function) 的编程语言

**关键字:[First class Function](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)**
* 函数将被当作变量对待
* [可以作为参数传递](#函数作为参数)
* [可以作为返回值被其他函数返回](#返回函数)
* 可以被当作值指定给一个变量


## 函数作为参数
>通常作为参数的函数被称为回调函数(callback function)
```javascript
var compare(a,b){
        return a-b;
}

// 函数作为参数传入,并使用
var sort=(a,b,compare){
        compare(a,b);
}
```




* 概念
* first class function
    * 函数可以作为参数专递
    * 函数可以返回函数
* 函数
    * 创建
* 类型
    *  匿名函数,函数如果无名称引用就是匿名函数
    * 闭包,require.js,es6,
    * 自执行函数
* 函数的使用

    

# day03 
* 对象与json
    * 创建方式
        * new 
        * {}
        * 字面量
    
    this 对象

* json
    * 存储json对象,localStorage
    * 字面量与对象互相
        *   json.parse()与json.stringIfy



#day04 
* 数组
  * forEach
  * filter
  * foreach
  * 全局显示

  
# day06 正则表达式
*   匹配字符 /w /W 
* 选择符 /num{3,5}
* 匹配选项 /ig

# day07 BOM
* 浏览器的兼容性
*  DOM
* 定时器

# es6与typescript 开启
* 类型

# 返回函数


