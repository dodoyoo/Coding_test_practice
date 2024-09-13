// 순서쌍의 개수

/*
문제
순서 쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로
(a, b)로 표기 합니다. 
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 
return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.length;
}

console.log(solution(20));
// 6  => (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1)
console.log(solution(100));
// 9 => (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1)

// case 2
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}
