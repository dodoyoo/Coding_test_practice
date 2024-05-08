/*
문제
정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때,
홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
두 값이 같을 경우 그 값을 return합니다.

제한사항
 5 ≤ num_list의 길이 ≤ 50
 -9 ≤ num_list의 원소 ≤ 9
*/

//풀이

function solution(num_list) {
  let even = 0; //-> 짝수를 의미
  let odd = 0; //-> 홀수를 의미

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      odd += num_list[i];
    } else {
      even += num_list[i];
    }
  }

  return math.max(even, odd);
}

/* 나의 고민
처음에는 변수를 선언하기 위해서 const를 사용하였다 하지만 이는 실행이 되지 않았다.
그래서 나는 let을 사용해 보았고 const와 let의 차이에 대해서 다시 생각을 하였다.

const는 변수를 선언하면 그 값이 변할 수 없지만 이 문제에서는 값이 더해져서 변해야 하기 때문에 let을 
사용해야한다라는 것을 생각했다.
*/
