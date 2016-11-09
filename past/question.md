1. 根据所有人的姓名年龄排序
2. 根据关键字过滤人名;
var peoples=[{
    name:'杨杰',
    age:23
},{
    name:'张小花',
    age:34
}
]
// [{name:'张小花',}]
filterByName(peoples,'张')

3. 根据query对象来查询具体