// 수 조작하기 1

/*
문제
정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
* "w" : n이 1 커집니다.
* "s" : n이 1 작아집니다.
* "d" : n이 10 커집니다.
* "a" : n이 10 작아집니다.
위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

제한사항
* -100,000 ≤ n ≤ 100,000
* 1 ≤ control의 길이 ≤ 100,000
    * control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.
*/

function solution(n, control) {
  let answer = n;
  const string = control.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'w') {
      answer += 1;
    } else if (string[i] === 's') {
      answer -= 1;
    } else if (string[i] === 'd') {
      answer += 10;
    } else if (string[i] === 'a') {
      answer -= 10;
    }
  }
  return answer;
}

/*
고민
- 문제를 말 그대로 풀어보면 w, a, s, d를 하나씩 증가 감소를 선언해주어야한다.
- 반복문 사용해야한다.

해결
- Control로 설정된 문자열을 split을 사용해서 하나씩 뜯어준다
- 반복문을 사용해서 control의 길이만큼 return할 수 있도록 해준다.
- 조건문을 사용해서 각각의 문자에 해당하는 값을 설정해준다.
*/
