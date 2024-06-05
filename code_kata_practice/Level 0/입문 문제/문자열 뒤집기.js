// 문자열 뒤집기

/*
문제
문자열 my_string이 매개변수로 주어집니다.
my_string을 거꾸로 뒤집은 문자열을 return하도록
Solution 함수를 완성해 주세요.
*/

function solution(my_string) {
  return [...my_string].reverse().join('');
}

console.log(solution('bread')); // "daerd"
