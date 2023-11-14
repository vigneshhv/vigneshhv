let msg1 = 'hello';
let msg2 = msg1.slice(-1);
// console.log(msg2 ? msg2 : msg2 + msg1);
// let test = prompt("Run", "code");

// let a = true && 20;
// let b = 0 || 20
// let c = 0 && 20;
// console.log(`${a} ${b} ${c}`);
let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);