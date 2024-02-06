//rny_string

/* 
문제
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ rny_string의 길이 ≤ 100
* rny_string은 영소문자로만 이루어져 있습니다.
*/

function solution(rny_string) {
  var answer = '';
  for (var i = 0; i < rny_string.length; i++) {
    if (rny_string[i] === 'm') {
      answer += 'rn';
    } else {
      answer += rny_string[i];
    }
  }
  return answer;
}

/*
고민
- m을 rn으로 출력하는 문제임
- string에 m이 있으면 rn으로 출력해주면 되는 것이고 그렇지 않으면 그대로 출력해주면 된다.

해결
- if문을 사용해서 문제를 풀어가면 된다.
- 만약 rny_string에 m이 있다면 rn으로 출력하고 그렇지 않으면 원상태로 출력한다. 라고생각한다.
*/
