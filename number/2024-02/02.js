// 문자열 정수의 합

/* 
문제
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
* 3 ≤ num_str ≤ 100
*/

function solution(num_str) {
  let answer = 0;
  for (let i = 0; i < num_str.length; i++) {
    answer += parseInt(num_str[i]);
  }
  return answer;
}

/*
고민
- num_str이 문자열로 나와준다
- 그러면 return을 문자의 자리 합의 합으로 간다.
- 반복문을 통해서 만들어줘야하고 그에 해당하는 값을 먼저 변수로 선언을 해줘야한다.

해결
- 나는 이번 문제 풀이에서 parseint()를 사용해 주었다.
- 이 메서드는 문자열을 파싱하여 숫자나 NaN을 return해준다.
- 그래서 반복문을 먼저 만들어 준다음
- 합을 하기 구해주기 위해서 answer = parseInt(num_str[I])를 사용해 주었다.
*/
