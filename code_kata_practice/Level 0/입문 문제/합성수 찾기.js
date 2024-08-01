// 합성수 찾기

/*
문제
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
자연수 n이 매개변수로 주어질 때 n 이하의 합성수의 개수를
return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.push(i);
      }
    }
  }
  return [...new Set(arr)].length;
}
