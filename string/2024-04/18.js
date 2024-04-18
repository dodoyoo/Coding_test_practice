// 문자열 반복해서 출력하기

/*
문제
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
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
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});

/*
해결
- 문자열 str이 주어지고 n이 횟수로 주어지니까
- repeat() 메서드를 사용을 해서 str.repeat(n)이라고 설정을 해주면 됨
*/
