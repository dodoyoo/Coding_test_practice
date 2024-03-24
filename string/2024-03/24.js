// 접미사 배열
/*
문제
어떤 문자열에 대해서 접미사는 특정 인덱스 부터 시작하는 문자열을 의미한다.
예를 들어, “banan”의 모든 접미사는 “banana”, “anana”, “nana”, “ana”, “na”, “a”이다.
문자열 my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return하는 solution함수를 작성해주세요.

제한사항
* my_string은 알파벳 소문자로만 이루어져 있습니다.
* 1 ≤ my_string의 길이 ≤ 100

*/

function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.substring(i, my_string.length));
  }
  return answer.sort();
}

/*
해결
- 사전적 순서로 배열을 해야하기 때문에 마지막 return에 sort() 메서드를 사용해줘야한다.
- 반복문을 사용해줘서 문자열을 찾아주고
- 새로운 배열을 만들기 위해서 push()메서드를 사용한다.
- 그 후 접미사를 확인하기 위해서 substring()메서드를 사용하면 된다.
*/
