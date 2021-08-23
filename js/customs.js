var newArrowTest = [`a`,`b`,`c`];
console.log(`задача №1 before--->`, newArrowTest);
newArrowTest.push(1, 2, 3);
console.log(`задача №1 after --->`, newArrowTest);

var newArrowTest1 = [1, 2, 3];
console.log(`задача №2 before --->`,newArrowTest1);
newArrowTest1 = newArrowTest1.reverse()//[3, 2, 1];
console.log(`задача №2 after --->`, newArrowTest1);

var newArrowTest2 = [1, 2, 3];
console.log(`задача №3 before --->`,newArrowTest2);
newArrowTest2.unshift(4, 5, 6);
console.log(`задача №3 after --->`,newArrowTest2);

var newArrowTest3 = [1, 2, 3, 4,5];
console.log(`задача №4 before --->`,newArrowTest3);
var newArrowTest3Copy = newArrowTest3.slice(0, 3);
console.log(`задача №4 after --->`, newArrowTest3Copy);

var newArrowTest4 = ['js', 'css', 'jq'];
console.log(newArrowTest4);
console.log(`вывод на экран --->`, newArrowTest4[0]);
document.write(`<h1> ${newArrowTest4[0]} </h1>`);

const fromPairs = (array) => array.reduce((key, value) => {
    if (Array.isArray(value)) {
      key[value[0]] = value[1];
    }
    return key;
  },
  {});

  const data = [['a', 1], ['b', 2]];
  console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }