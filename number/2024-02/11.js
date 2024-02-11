// 카운트 업

/*
문제
정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 0 ≤ start_num ≤ end_num ≤ 50
*/

function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer.slice(0, answer.length);
}

/*
고민
- start와 end가 주어진다.
- 배열 안에 숫자를 넘겨주면된다.
- 메서드를 사용한다.

해결
- slice 메소드를 사용해주면 된다.
- 반복문이 필요하다.
- push를 사용해서 처음과 끝의 숫자 배열을 추가해준 뒤 그것을 slice를 사용해서 배열의 처음인 0부터 answer.length 까지로 설정을 해줘서 출력을 해줄 수 있도록 한다.
*/
