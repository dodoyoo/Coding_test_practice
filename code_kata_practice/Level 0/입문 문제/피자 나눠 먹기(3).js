// 피자 나눠 먹기 (3)

/*
머쓱이네 피자가게는 피자를 두조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
N 명의 사람이 최소 한 조각 이상 피자를 먹으려면 
최소 몇판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해 보세요.
*/

function solution(slice, n) {
  var answer = Math.ceil(n / slice);
  return answer;
}

console.log(solution(7, 10)); // 2
console.log(solution(4, 12)); // 3

// case 2
function solution(slice, n) {
  let i = 1;
  while (slice * i < n) {
    i++;
  }
  return i;
}
