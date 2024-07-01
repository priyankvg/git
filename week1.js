function count(first, last) {
  let sum = 0;
  for (let i = 0; i <= last; i++) {
    sum += i;
  }
  return sum;
}
function print() {
  console.log("10 seconds");
}
setTimeout(print, 10 * 1000);
var ans = count(1, 10000);
console.log(ans);

// to understand visit loupe site and week1.txt
// stopwatch
var count = 1;
var counter = 1;

// for (var i = 0; i < 1000; i++) {
//     counter = counter + 1;
// }
// console.log(counter);
console.log("git");
function print() {
  console.clear();
  console.log(count);
  count = count + 1;
}

setInterval(print, 1000);
///************************************************** */

//async chaining due to this promises introdeced

setTimeout(function print1() {
  console.log("count1");
  setTimeout(function print2() {
    console.log("count2");
    setTimeout(function print3() {
      console.log("count3");
    }, 3000); //async callback chaining promises introduce
  }, 2000);
}, 1000);

//async callback chaining for this problem  promises introduce or to get away from callback
//where promises as excutor or constructor
//(fullfile)resolve and reject are two parameters in promises. and it can be also used as function in timeout.

function priyank(resolve) {
  setTimeout(resolve, 5000); // here resolve also as function
}
function med() {
  var answer = new Promise(priyank); // make new promise ans call priyank function
  return answer;
}
function k() {
  console.log("lu");
}
var med1 = med();
console.log(med1.then(k));

// in object we can use function for keys like string and number
