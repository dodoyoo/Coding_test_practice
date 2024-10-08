// 문자 반복 출력하기

/* 
문제
문자열 my_string과 정수 n이 매개변수로 주어질 때,
my_string에 들어있는 각 문자를 n 만큼 반복한
문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, n) {
  var answer = [...my_string].map((char) => char.repeat(n)).join('');
  return answer;
}

console.log(solution('hello')); // "hhheeellllllooo"

// case 2
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join('');
  console.log(answer);
  return answer;
}
