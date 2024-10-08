// 배열 자르기

/*
문제
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
return하도록 solution 함수를 완성해 보세요.
*/

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]

// case 2
function solution(numbers, num1, num2) {
  var answer = [];

  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}
