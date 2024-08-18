// 각도기

/*
문제
각에서 0도 초과 90 미만은 예각, 
90도는 직각, 
90도 초과 180도 미만은 둔각
180도는 평각으로 분류합니다.
각 angle이 매개변수로 주어질 때
예각일 때 1, 직각일 때 2, 둔각일때 3, 평각일 때 4를 return하도록
solution 함수르 완성해주세요.
*/

function solution(angle) {
  return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
}

console.log(solution(70)); // 1
console.log(solution(91)); // 3
console.log(solution(180)); // 4

// case 2
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
