// 자릿수 더하기

/*
문제
정수 n이 매개변수로 주어질 때 
n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = 0;
  let result = n.toString().split('');
  for (let i = 0; i < result.length; i++) {
    answer += parseInt(result[i]);
  }
  return answer;
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16

// case 2
function solution(n) {
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
