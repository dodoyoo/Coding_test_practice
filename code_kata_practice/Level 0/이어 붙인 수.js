// 이어 붙인 수

/*
문제
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
* 2 ≤ num_list의 길이 ≤ 10
* 1 ≤ num_list의 원소 ≤ 9
* num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.
*/

function solution(num_list) {
  let odd = '';
  let even = '';

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      odd += num_list[i].toString();
    } else {
      even += num_list[i].toString();
    }
  }
  return parseInt(odd) + parseInt(even);
}

/*
고민
- 배열이 주어지고 이를 홀수와 짝수로 구분을 해줘야한다.
- 구분을 해준 것을 각각을 더해줘야한다.

해결
- odd는 홀수 even은 짝수로 설정을 한다.
- 문제를 해결 해주기 위해서 num_list[i]를 나누어서 홀수를 설정해준다.
- 그 이후 odd에 num_list를 더해주고 이것을 문자열로 바꾸어 준다.
- 짝수일 경우에도 똑같이 진행을 해준다.
- 마지막으로 return을 할때 parseInt()를 사용해서 문자열로 바꾸어준다음 파싱을 하여 정수로 추출을 해준다.
*/
