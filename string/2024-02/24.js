// 접미사인지 확인하기

/*
문제
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다. 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ my_string의 길이 ≤ 100
* 1 ≤ is_suffix의 길이 ≤ 100
* my_string과 is_suffix는 영소문자로만 이루어져 있습니다.
*/

function solution(my_string, is_suffix) {
  if (my_string.endsWith(is_suffix)) {
    return 1;
  } else {
    return 0;
  }
}

/*
고민
- 접미사를 확인하는 문제이다.
- 접미사는 영어로 suffix이다.
- 조건문으로만 사용하여 코드를 완성할 수 있다.

해결
- 조건문을 사용하여 my_string에 is_suffix가 속한다면 1 속하지 않다면 0을 return해주면 된다.
- 접두사는 starsWith() 메서드를 사용해주었다.
- 접미사는 그 반대로 endsWith() 메서드를 사용해주면 된다.
*/
