// 진료 순서 정하기

/*
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 
정한 배열을 return 하도록 solution 함수를 완성합니다.
*/

function solution(emergency) {
  let check = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => check.indexOf(v) + 1);
}

// case 2
function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((k) => {
    const queue = sort.findIndex((v) => v === k);

    return queue + 1;
  });
}
