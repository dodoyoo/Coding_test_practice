// 간단한 식 계산하기

/*
문제
문자열 binomial이 매개변수로 주어집니다.
binomial은 “a op b” 형태의 이항식이고 a+ b는 음이 아닌 정수, op는 ‘+’,’-‘,’*’ 중 하나입니다.
주어진 식을 계산한 정수를 return하는 solution 함수를 작성해 주세요.

제한사항
* 0 ≤ a, b ≤ 40,000
* 0을 제외하고 a, b는 0으로 시작하지 않습니다.
*/

function solution(binomal) {
  let answer = '';
  let oper = binomal.split(' ');

  let a = Number(oper[0]);
  let op = oper[1];
  let b = Number(oper[2]);

  if (op === '+') {
    answer = a + b;
  } else if (op === '-') {
    answer = a - b;
  } else if (op === '*') {
    answer = a * b;
  }
  return answer;
}

// console.log(solution(1+3))
// -> 4

/*
  해결
  - 먼저 문자열로 있는 binomal을 split으로 쪼개준다.
  - 그 이후 각각 변수를 설정해주어서 배열의 순서와 맞게 설정을 해준다.
  - 이를 조건문을 활용하여 식을 만들어준다.
  */
