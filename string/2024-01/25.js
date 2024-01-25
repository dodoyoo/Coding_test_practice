// 문자열 곱하기

/* 
문제
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ my_string의 길이 ≤ 100
* my_string은 영소문자로만 이루어져 있습니다.
* 1 ≤ k ≤ 100
*/

function solution(my_string, k) {
  var answer = '';
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}

/*
고민
- 문자열이고 배열이라고 생각하지 않는다.
- 단순 반복을 해주는 것이다.
- my_string을 k번 반복해준다.

해결
- 나는 반복문을 이용하여 k번 반복해서 출력할 수 있도록 만들었으며 
- 반복문 안에 answer += my_string을 더해줌으로써 반복 횟수만큼 출력할 수 있도록 하였다.
- 반복 메서드를 사용하여 만들 수 있다. 
- repeat() 메서드를 사용하여 만든다면
	반복문을 사용하지 않고 
	function solution(my_string, k) {
	return my_string.repeat(k);
}
	를 사용하면 좀 더 간결하고 간단하게 나올 수 있다
*/
