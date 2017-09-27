// 1
var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples.');


// 2
var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'
};


// 3
var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' is less than 10.');
}


// 4
// (10).times = function() {
//   console.log("Doing the same thing over and over.");
// }
// return function()

var number = 10;

for (var i = 1; i <= number; i++) {
  console.log("Doing the same thing over and over.");
}


// 5
var base = 5;
var repeat_times = 20;
function basePlus(number) {
  for (var i = 0; i < repeat_times; i++) {
    console.log(base + i);
  }
}
basePlus(repeat_times);


// 6
var total = 0;
var repeat_times = 100;
for (var i = 0; i < repeat_times; i++) {
  total += i;
}
console.log(total);


// 7
for (var i = 3; i <= 15; i++) {
  if (i > 9) {
    console.log('You can get on the rollercoaster!');
  } else {
    console.log('You are too short to ride this rollercoaster.');
  }
}


// 8
var container = ['purse', 'wallet', 'backpack'];
var length = container.length;
for (var i = 0; i < length; i++) {
  console.log(container[i]);
}


// 9
var greetings = 'Hello world!'
console.log(greetings);


// 10
var first_num = 5;
var second_num = 7;
var amount = first_num + second_num;
console.log(amount);
