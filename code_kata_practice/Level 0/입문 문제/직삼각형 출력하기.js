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
