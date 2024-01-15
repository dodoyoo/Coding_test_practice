// 문자열의 앞의 n글자

/*
문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* my_string은 숫자와 알파벳으로 이루어져 있습니다.
* 1 ≤ my_string의 길이 ≤ 1,000
* 1 ≤ n ≤ my_string의 길이
*/

function solution(my_string, n) {
  return my_string.slice(0, n);
}

/*
고민
- String 앞에 n번째 글자가 나오도록 해야한다.
- 글자만 어떻게 나와야할지 생각을 했다.

해결
- string에서 주어진 숫자만큼 글자만 나오도록할지 또는 n만큼 뒤에 있는 숫자는 삭제를 할지 생각을 해보았다.
- splice()를 사용하는 것도 생각을 해보았지만 slice()가 이 곳에서 더 적절할 것 같다.
*/
