// 덧셈식 출력하기

/*
문제
두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
a + b = c

입력
-> 4 5

출력
-> 4 + 5 = 9
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
  const [first, second] = input.map((a) => Number(a));
  console.log(`${first} + ${second} = ${first + second}`);
});

/*
해결
- 주어진 식에 a와 b를 설정하여 배열에 담아준 뒤 이것을 다시 숫자로 바꿔주는 방법을 선택했다.
- map을 활용하여 number로 바꿔주고 이것을 출력할때 주어진 식과 같은 혙애로 만들어서 출력해주었다.
*/
