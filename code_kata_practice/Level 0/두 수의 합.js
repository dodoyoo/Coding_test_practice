// 두 수의 합

/*
문제
0 이상의 두 정수가 문자열 a, b로 주어질 때, 
a + b의 값을 문자열로 return하는 solution 함수를 작성해 주세요.
*/

function solution(a, b) {
  var a1 = BigInt(a);
  var b1 = BigInt(b);
  var c1 = a1 + b1;
  var d1 = String(c1);
  return d1;
}

console.log(solution('582', '734')); // "1316"
console.log(solution('18446744073709551615', '305793246910280479981')); // "305793246910280479981"

/*
해결
- a와 b가 문자열로 정수가 주어진다.
- 입출력 예에서 Number()의 범위가 넘는 숫자가 주어지기 때문에 BigInt()를 사용해서 a + b를 더해주었다.
*/

// 더 간단한 풀이
function solution(a, b) {
  let result = '';

  result = (BigInt(a) + BigInt(b)).toString();

  return result;
}
