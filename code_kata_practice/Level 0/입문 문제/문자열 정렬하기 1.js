// 문자열 정렬하기 1

/*
문제
문자열 my_string이 매개변수로 주어질 때,
my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를
return하도록 solution 함수를 작성해보세요.
*/

function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .sort((a, b) => a - b)
    .map((v) => Number(v));
}

console.log(solution('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution('hi12392')); // [1, 2, 2, 3, 9]
