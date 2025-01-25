// 짝수는 싫어요

/* 
문제
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 
담긴 배열을 return 하도록  solution 함수를 완성해 주세요.
*/

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}

// case 2
const solution = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
