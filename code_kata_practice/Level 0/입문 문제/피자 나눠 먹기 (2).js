// 피자 나눠 먹기(2)

/*
문제
머쓱이네 파자가게는 피자를 여섯 조각으로 잘라줍니다.
피자를 나눠먹을 사람의 수 N이 매개변수로 주어질 때,
n명이 주문한 피자를 남기지 않고 모두 같은 수의
피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 
return 하도록 solution 함수를 완성해보세요.
*/

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      return i;
    }
  }
}

//case 2

function solution(n) {
  let pizza = 6;
  while (pizza % n !== 0) {
    pizza += 6;
  }
  return pizza / 6;
}
