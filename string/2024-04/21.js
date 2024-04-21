// QR code

/*
문제
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때
나머지가 r인 위치의 문자를 앞에서 부터 순서대로 이어 붙인 문자열을 
return하는 solution 함수를 작성해 주세요.
*/

function solution(q, r, code) {
  var answer = '';
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
}
/*
해결
- 이 문제는 쉽게 풀 수 있었다.
- 문제에 나와있는대로 code를 q로 나눈 나머지인 r이 해당되는 문자열을 출력해주면 되는 것이다.
- 반복문을 사용해서 문자열을 찾을 수 있도록 실행 해주고 조건문을 문제와 같이 설정을 해주었다.
- 그 후 빈 문자열인 answer에 code[I]를 더해주어서 출력을 해주면 문제를 해결할 수 있다.
*/
