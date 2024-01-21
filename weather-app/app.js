console.log("start");

setTimeout(() => {
  console.log("set timer 4 sec");
}, 2001);
setTimeout(() => {
  console.log("set timer 2 sec");
}, 2000);
console.log("middle");
setTimeout(() => {
  console.log("set timer 0 sec");
}, 0);
setTimeout(() => {
  console.log("set timer 3 sec");
}, 3000);

console.log("stop");
