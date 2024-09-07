// 숫자 찾기

/*
문제
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에
k가 있으면 num의 그 숫자가 있는 자리 수를 return하고
없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num, k) {
  var answer = num.toString().indexOf(k);
  return answer !== -1 ? answer + 1 : answer;
}

console.log(solution(29183, 1)); // 3

//case 2 다른방식 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split('')
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
