// 부분 문자열
/*
문제
어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.
문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

제한 사항
* 1 ≤ str1 ≤ str2 ≤ 20
* str1과 str2는 영어 소문자로만 이루어져 있습니다.
*/

function solution(str1, str2) {
  if (str2.includes(str1)) {
    return 1;
  } else {
    return 0;
  }
}
/* 
고민
- 문제를 해석해보면 만약 str1이 str2의 부분 문자열이라면 1을 return, 부분 문자열이 아니라면 0을 return

해결
- 만약 str1이 str2의 부분 문자열이다.
- 그렇다면 조건문을 넣어줘야한다.
- 그런 뒤 속한다 라는 메서드를 찾아줘야하는데 속한다 라는 메서드는 includes()를 사용할 수 있다.
- 나의 풀이는 다음과 같다.
*/
