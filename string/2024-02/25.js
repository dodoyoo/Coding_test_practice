// 글자 이어 붙여 문자열 만들기

/*
문제
문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ my_string의 길이 ≤ 1,000
* my_string의 원소는 영소문자로 이루어져 있습니다.
* 1 ≤ index_list의 길이 ≤ 1,000
* 0 ≤ index_list의 원소 < my_string의 길이
*/

function solution(my_string, index_list) {
  var answer = '';
  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

/*
고민
- 문자열이 주어졌을때 배열 안의 숫자대로 재 배열하여 출력이 되도록 해줘야한다.
- 배열 안의 숫자는 랜덤이다.
-  배열로 바꿔줘야하니까 문자열을 배열로 바꿔주는 작업 먼저 해준다.

해결
- 반복문을 my_string이 기준이 아닌 index_list로 잡아야한다. 왜냐하면 index_list 배열의 각 원소를 순회하면서 해당하는 인덱스의 문자를 추출해야하기 때문이다.
- 반복문을 설정을 해준 뒤 조건문을 사용하지 않고 index_list에 해당하는 문자를 my_string에서 추출하여 붙여줘야한다.
*/
