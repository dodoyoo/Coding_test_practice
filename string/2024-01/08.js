/* 문제 1

 문자열 my_string과 target이 매개변수로 주어질 때, 
 target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

 제한사항
 1 ≤ my_string의 길이 ≤ 100
 my_string은 영소문자로만 이루어져 있습니다.
 1 ≤ target의 길이 ≤ 100
 target은 영소문자로만 이루어져 있습니다.
 */

// 풀이

function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

/*
tip

Function solution(my_string, target) {
	return +my_string.includes(target);
}

여기서 +를 Boolean값을 숫자로 변환해주는 역할을 한다.
*/
