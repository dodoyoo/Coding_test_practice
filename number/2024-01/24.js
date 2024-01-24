// 카운트 다운

/*
문제
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 0 ≤ end_num ≤ start_num ≤ 50
*/

function solution(start, end_num) {
  var answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

/*
고민
- 카운트 다운이니까 숫자가 하나씩 줄어드는 형식으로 함수를 만들어줘야한다.
- 반복문을 사용해야할까? 그럼 증감식에서 마지막 i++이 부분을 다르게 해주면 될꺼같은데
- 반복문의 형태를 다르게 해줘야할듯하다.

해결
- 반복문의 형태를 let i = start로 하고 i >= end_num으로 설정해주고 증감식부분을 i—로 해주었다.
- 또한 배열에서 하나씩 추가되어서 출력이 되어야 함으로 push() 메서드를 설정해준다.
*/
