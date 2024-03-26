// 문자열 돌리기

/*
문제
문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

입력
abcde

출력
a
b
c
d
e
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  [...input].forEach((a) => console.log(a));
});

/*
해결
- 문자열을 한 문자열로 주어지기 때문에  하나 씩 쪼개 줘야한다.
- 이후 forEach() 메서드를 사용해서 함수를 실행하여 출력할 수 있도록 한다.
*/
