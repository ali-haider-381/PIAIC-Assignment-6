// Q No=1
// Write a program that uses filter to remove all negative numbers from an array of numbers
var numArray:number[] = [1,2,-3,4,-5,6,7,-8,9,10,-11,12,13,-14,15,16];
var postive = numArray.filter((i)=> i>0);
console.log(postive);

// Q No=2
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var num:number[] = [1,2,3,4,5];
var Numbers = num.map((g)=> g*2);
console.log(Numbers);

// Q No=3
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
var sum:string[] = ["apple","banana","cherry","date","grape"];
var Fruits = sum.filter((g)=>{if(g.length>5){return g;}})
console.log(Fruits);

// Q No=4
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var num:number[] = [1,2,3,4,5,6,7,8,9,10];
var Even = num.filter((g)=> g%2==0).map((a)=>a**2);
console.log(Even);

// Q No=5
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var number:number[] = [0,10,20,30,40];
var temp = number.map((i)=>{return ((i*9/5)+32);})
console.log(temp);

// Q No=6
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var namearray:number[] = [3,6,9,12,15,18];
var array = namearray.filter((i) => i%2!= 0).map((j)=>j*2);
console.log(array);

// Q No=7
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var names:string[] = ["Alice","Bob","Charlie","David","Emily"];
var Name = names.forEach((i) => {console.log(i+"!");});