// 1-Masala.

function sum(x, y) {
  return x + y;
}
console.log(sum(3, 2));   
console.log(sum(-3, -6)); 
console.log(sum(7, 3));  

// 2-Masala.

function toSekunds(minutes) {
  return minutes * 60;
}
console.log(toSekunds(5)); 
console.log(toSekunds(3)); 
console.log(toSekunds(2)); 

// 3-Masala.

function nextInteger(int) {
  return int + 1;
}
console.log(nextInteger(0));
console.log(nextInteger(9));
console.log(nextInteger(-3));

// 4-Masala.

function uchburchakYuzi(asos, balandlik) {
  return (asos * balandlik) / 2;
}
console.log(uchburchakYuzi(3, 2));
console.log(uchburchakYuzi(7, 4));
console.log(uchburchakYuzi(10, 10));

// 5-Masala.

function ageToDays(age) {
  return age * 365;
}
console.log(ageToDays(65));
console.log(ageToDays(0));
console.log(ageToDays(20));

// 6-Masala.

function kub(x) {
  return x ** 3;
}
console.log(kub(3));
console.log(kub(5));
console.log(kub(10));

// 7-Masala.

function firstElement(arr) {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([80, 5, 100]));
console.log(firstElement([-500, 0, 50]));

// 8-Masala.

function power(x, y) {
  return x * y;
}
console.log(power(230, 10));
console.log(power(110, 3));
console.log(power(480, 20));

// 9-Masala.

function hourToSekunds(hour) {
  return hour * 3600;
}
console.log(hourToSekunds(2));
console.log(hourToSekunds(10));
console.log(hourToSekunds(24));

// 10-Masala.

function uchinchiTomon(tomon1, tomon2) {
  return (tomon1 + tomon2) - 1;
}
console.log(uchinchiTomon(8, 10));
console.log(uchinchiTomon(5, 7));
console.log(uchinchiTomon(9, 2));

// 11-Masala.

function qoldiq(son1, son2) {
  return son1 % son2;
}
console.log(qoldiq(1, 3));
console.log(qoldiq(3, 4));
console.log(qoldiq(-9, 45));
console.log(qoldiq(5, 5));

// 12-Masala.

function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}
console.log(turtburchakYuzi(6, 7));
console.log(turtburchakYuzi(20, 10));
console.log(turtburchakYuzi(2, 9));

// 13-Masala.

function stringQoshish(a) {
  return "" + a;
}
console.log(stringQoshish("natija"));
console.log(stringQoshish("natija"));
console.log(stringQoshish("natija"));

// 14-Masala.

function kvadrat(x) {
  return x * x;
}
console.log(kvadrat(5));
console.log(kvadrat(9));
console.log(kvadrat(100));

// 15-Masala.

function noldan(raqam) {
  return raqam <= 0;
}
console.log(noldan(5));
console.log(noldan(0));
console.log(noldan(-2));

// 16-Masala.

function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}
console.log(ichkiBurchaklar(3));
console.log(ichkiBurchaklar(4));
console.log(ichkiBurchaklar(6));

// 17-Masala.

function ochkolar(x, y) {
  return (x * 2) + (y * 3);
}
console.log(ochkolar(1, 1));
console.log(ochkolar(7, 5));
console.log(ochkolar(38, 8));

// 18-Masala.

function nameString(name) {
  return name + "O'yin";
}
console.log(nameString("dota 2"));
console.log(nameString("csgo 2"));
console.log(nameString("apex legends"));

// 19-Masala.

function kichik100dan(x, y) {
  return (x + y) < 100;
}
console.log(kichik100dan(22, 15));
console.log(kichik100dan(83, 34));
console.log(kichik100dan(3, 77));

// 20-Masala.

function printArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(printArray(1));
console.log(printArray(3));
console.log(printArray(6));