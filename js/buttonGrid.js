// let nums = [1, 2, 3, 6, 9, 8, 7, 4];
// const btns = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];
// function rotate() {
//   nums.unshift(nums.pop());
//   btns.forEach((v, i) => {
//     document.getElementById(v).innerText = nums[i];
//   });
// }

var l = "4";
var a = ["1", "2", "3", "6", "9", "8", "7", "4"];
var b = ["1", "2", "3", "6", "9", "8", "7", "4"];

var rotate = function () {
  for (var i = 7; i > 0; i--) {
    a[i] = a[i - 1];
  }

  a[0] = l;
  l = a[7];

  for (var i = 0; i < 8; i++) {
    document.getElementById("btn" + b[i]).innerText = a[i];
  }
};
