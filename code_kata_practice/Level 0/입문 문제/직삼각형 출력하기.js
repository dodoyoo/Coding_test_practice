// 직삼각형 출력하기

/*
문제
"*"의 높이와 너비를 1이라고 했을 때,
"*"을 이용해 직각 이등변 삼각형을 그리려고 합니다.
정수 n이 주어지면 높이와 너비가 n인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= +input[0]; i += 1) {
    console.log('*'.repeat(i));
  }
});

// case 2
const readline = require('readline');
const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input2 = [];

rl2
  .on('line', function (line) {
    input2 = line.split(' ');
  })
  .on('close', function () {
    solution(Number(input[0]));
  });

function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log('*'.repeat(i));
  }
}
