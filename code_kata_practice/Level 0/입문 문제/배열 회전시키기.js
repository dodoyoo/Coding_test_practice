// 배열 회전시키기

/*
문제 
정수가 담긴 배열 numbers와 문자열 direction이 매개변수로 주어집니다.
배열 numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열을
return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

console.log(solution([1, 2, 3], 'right')); // [3, 2, 1]
