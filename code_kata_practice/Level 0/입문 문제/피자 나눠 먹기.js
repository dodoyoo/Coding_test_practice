// 피자 나눠 먹기 1

/*
문제
머쓱이네 피자가계는 피자를 일곱 조각으로 잘라 줍니다.
피자를 나눠먹을 사람의 수 n이 주어질 때,
모든 사람의 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 
Return 하는 solution 함수를 완성해보세요
*/

function solution(n) {
  let pizzas = Math.floor(n / 7);
  if (n % 7 !== 0) {
    pizzas += 1;
  }
  return pizzas;
}

//case 2
function solution(n) {
  return Math.ceil(n / 7);
}
