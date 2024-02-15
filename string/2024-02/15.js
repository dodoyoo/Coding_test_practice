// 홀짝 구분하기

/*
문제
자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

제한사항
* 1 ≤ n ≤ 1,000
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
  n = Number(input[0]);
  if (n % 2 === 1) {
    console.log(n + ' is odd');
  } else {
    console.log(n + ' is even');
  }
});

/*
고민
- 함수를 사용해서 반복문을 사용해서 홀수인 것을 설정하고 문제와 같이 홀수면 string형식인 n is odd를 출력할 수 있도록 하면 되지 않을까

해결
- 이 문제를 풀이하는데 나는 소스코드를 사용하지 않고 함수를 사용하여 풀이를 하려고했지만 풀리지 않았다. 
- 그래서 소스코드를 자세히 들여다 보고 내가 작성해야 할 곳을 찾아서 코드 작성을 진행해였다.
- 조건문을 사용하여 홀수를 설정을 해주었고, return을 사용하지 않고 console.log를 사용하여 진행하였다.
*/
