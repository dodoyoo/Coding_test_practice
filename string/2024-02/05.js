// 문자열의 뒤의 n글자

/*
문제
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* my_string은 숫자와 알파벳으로 이루어져 있습니다.
* 1 ≤ my_string의 길이 ≤ 1,000
* 1 ≤ n ≤ my_string의 길이
*/

function solution(my_string, n) {
  return my_string.slice(-n);
}

/*
 고민
 - n글자로 이루어진 글자가 출력되어야하고 n번째 까지 뒤에서 부터 글자가 나와햔다.
 
 해결
 - 이 문제를 보고 slice()메서드를 생각을 했다.
 - slice에서 n번째라고 했으니 n으로만 쓰면 앞에서 부터인 것을 알려줄 수 있고 뒤에서 부터 나와야하는 역순이기 때문에 -n을 써주어야한다.
 */
