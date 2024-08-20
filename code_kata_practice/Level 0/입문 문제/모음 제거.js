// 모음 제거

/*
문제
영어에선 a, e, I, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 
return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

console.log(solution('bus')); // bs
console.log(solution('nice to meet you')); // nc t mt y

// case 2
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');
}
