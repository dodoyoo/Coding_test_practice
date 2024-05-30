// 중앙값 구하기

/*
문제
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때
가장 중앙에 위치하는 값을 의미합니다.
예를들어 1, 2, 7, 10, 11,의 중앙 값은 7입니다.
정수배열 array가 매개변수로 주어질 때,
중앙값을 return하도록 solution 함수를 완성해 보세요.
*/

function solution(array) {
  array.sort((a, b) => a - b);

  let mid = (array.length / 2) | 0;

  return array[mid];
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([3, 1, 2])); // 2
console.log(solution([9, -1, 0, 8, 2])); // 2
