/*
문자열 my_string이 매개변수로 주어집니다.
my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. 
my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_string) {
  return my_string.split(/[a-zA-z]/g).reduce((a, c) => +a + +c, 0);
}

// case 2
function solution(n) {
  let answer = '';
  for (let i = 0; i < n.length; i++) {
    if (Number.isInteger(+n[i])) {
      answer += n[i];
    } else {
      answer += ' ';
    }
  }
  return answer.split(' ').reduce((acc, cur) => (acc += +cur), 0);
}
