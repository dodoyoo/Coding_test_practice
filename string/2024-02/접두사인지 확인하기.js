// 접두사인지 확인하기

/*
문제
문제 설명
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ my_string의 길이 ≤ 100
* 1 ≤ is_prefix의 길이 ≤ 100
* my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
*/

function solution(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) {
    return 1;
  } else {
    return 0;
  }
}

/*
고민
- 접두사인지 아닌지만 확인을 해주면된다.
- 그렇다면 includes를 사용해야할까?

해결
- includes()를 사용을 해본 결과 “nan”에서 오답이 나왔다.
- 그럼 includes()가 아닌 다른 메서드를 사용해야하는데 이 접두사로 시작하는지 아닌지를 확인을 해야한다.
- startsWith()을 사용하면 가능하다. 이것은 startsWith() 괄호 안에 있는 문자로 시작하는지를 확인하는 메서드이다.
*/
