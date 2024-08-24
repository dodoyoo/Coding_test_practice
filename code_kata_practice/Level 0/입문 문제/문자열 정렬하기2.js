// 문자열 정렬하기 2

/*
문제
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
my_string을 모두 소문자로 바꾸고 알바벳 순서대로 정렬한 문자열을
return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}

console.log(solution('Python')); //"hnopty"

// case 2
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}
