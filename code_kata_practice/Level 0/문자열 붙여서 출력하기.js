// 문자열 붙여서 출력하기

/* 
문제
두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

제한사항
* 1 ≤ str1, str2의 길이 ≤ 10

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
  str1 = input[0];
  str2 = input[1];

  const result = input[0] + input[1];
  console.log(result);
});

/*
해결 
- 이번 문제는 정말 모르겠어서 블로그 검색을 하였고 주어진 코드의 내용이 무엇인지 정확하게 파악을 할 수 없어서 gpt를 사용하여 코드의 정보를 알아냈다.
*/
