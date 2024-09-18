// 몫 구하기

/*
문제
정수 num1, num2가 매개변수로 주어질 때,
num1을 num2로 나눈 몫을 return하도록
Solution 함수를 완성해주세요.
*/

function solution(num1, num2) {
  return Math.trunc(num1 / num2);
}

console.log(solution(10, 5)); // 2
console.log(solution(7, 2)); // 3

// case2
const solution = (num1, num2) => Math.floor(num1 / num2);
