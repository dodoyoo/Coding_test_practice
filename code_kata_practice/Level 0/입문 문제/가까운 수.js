/*
문제
정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를
완성해주세요.
*/

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}

// case 2
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}
