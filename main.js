console.log('------------- # 5');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );


  
console.log('------------- # 6')
    let string = 'my-short-string';
    let arr = string.split('-');
    console.log(arr);
  


console.log('------------- # 7')
let arr = ['JavaScript', 2015];
let string = arr.join(' ');
console.log(string);



console.log('------------- # 8')
let users = [{id: 1, name: "Vic", age: 21},  
            {id: 2, name: "Petya", age: 30}, 
            {id: 3, name: "Jon", age: 5}];

let collection = users.filter(function(item) { return item.age < 20});
console.log(collection);



console.log('------------- # 9')    
let users = [{id: 1, name: "Vic", age: 21},  
            {id: 2, name: "Petya", age: 30}, 
            {id: 3, name: "Jon", age: 5}];

let names = users.map(item => item.name);
console.log(names);



console.log('------------- # 10')
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];

      if (value < a || value > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); 
  
  console.log(arr);


  
console.log('------------- # 11')
function array(message, separator) {
    return message.split(separator);
}
array('London is a capital of Great Britain', ' ');



console.log('------------- # 12');
var array = [5, 3, 8, 1];
function slArray(arr, a, b){
    return arr.slice(a, b);
}
console.log(slArray(array, 1, 4));
console.log(array);



console.log('------------- # 13');
function sum(...args) { 
    let result = 0;
    for (let arg of args) { 
        result += arg; 
    }
    return result;
  }
 
console.log(sum(1,2,3,4,5,6,7,8));