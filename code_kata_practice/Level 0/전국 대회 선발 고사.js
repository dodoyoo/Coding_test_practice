// 전국 대회 선발 고사

/*
문제
0부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다.
등수가 높은 3명을 선발해야 하지만, 
개인사정으로 전국 대회에 참여하지 못하는 학생들이 있어
참여가 가능한 학생 중 등수가 높은 3명을 선발 하기로 했습니다.

각 학생들의 선발 고사 등수를 담은 정수 배열 rank와
전국 대회 참여 가능 여부가 담긴 boolean
배열 attendance가 매개 변수로 주어집니다.
전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로
각각 a, b, c번이라고 할 때 10000 x a + 100 x b + c를
return하는 solution 함수를 작성해 주세요.
*/

function solution(rank, attendance) {
  let answer = [];

  rank.forEach((x, i) => {
    if (attendance[i]) answer.push(x);
  });

  answer = answer.sort((a, b) => a - b).map((x) => rank.indexOf(x));

  const num1 = answer[0] * 10000;
  const num2 = answer[1] * 100;
  const num3 = answer[2];

  return num1 + num2 + num3;
}
