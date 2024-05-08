// 글자 지우기

/*
문제
문자열 my_string과 정수 배열 indices가 주어질 때,
 my_string에서 inicedes의 원소에 해당하는 인덱스의 글자를 지우고
 이어 붙인 문자열을 return하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, indices) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }
  return answer;
}

/*
고민
- 반복문을 사용?
- 전개연산자 사용해주고 쪼개진거를 indices가 포함하면 지워주고 그것을 다시 조인을 해서 return해주면 끝?

해결
- 반복문을 사용을 해줘서 my_string의 값을 설정을 해준다
- 조건문을 사용하여 indices 배열에 포함되지 않는 인덱스의 글자들을 새로운 문자열 answer에 추가를 해준다.
- 포함이 되어있는지 알기 위해서 includes 메서드를 사용해준다.
*/
