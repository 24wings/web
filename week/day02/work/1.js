var test = "abcdefgf";
var position = test.indexOf('f');
// console.log(position);
// test = test.replace(/f/g, '');
// console.log(test);
// test = test.slice(0, position);
// console.log(test);
// console.log(test.search()
var peoples = [{ name: 'a', age: 23 }, { name: 'b', age: 13 }];
for (var i = 0; i < peoples.length; i++) {
}
// peoples.forEach(person => console.log(person));
peoples.sort(function (a, b) { return a.age - b.age; });
// console.log(peoples);
// peoples = peoples.filter(person => person.name == 'a')
console.log(peoples);
var results = peoples.every(function (person) { return person.age >= 18; });
// console.log(results)
var chengnian = peoples.some(function (person, index, persons) { return person.age >= 18; });
console.log(chengnian);
console.log(new Date().getMonth());
// var num = new Date().getTime();
// console.log(num)
// console.log(new Date(1478764125165));
// new Date().
var wantDate = new Date();
wantDate.setFullYear(2010);
wantDate.setMonth(4);
wantDate.setDate(5);
console.log(wantDate);
var persons = [{ name: 'a', age: 23 }, { name: 'b', age: 13 }];
console.dir(persons);
