// 중복된 숫자 개수

/*
문제
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
array에 n이 몇 개 있는 지를 return하도록 solution 함수를 완성해보세요.
*/

function solution(array, n) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
