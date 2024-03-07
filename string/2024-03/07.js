// x 사이의 개수

/*
문제
문자열 myString이 주어집니다.
myString을 문자 “x”를 기준으로 나눴을때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return하는 solution 함수를 완성해주세요.
*/

function solution(myString) {
  const answer = [];
  const x = myString.split('x');

  for (let i = 0; i < x.length; i++) {
    answer.push(x[i].length);
  }
  return answer;
}

/*
고민
- “X”를 기준으로해서 하나씩 잘라줘야한다.
- 자르고난 이후 이것을 문자의 길이를 배열로 숫자로 나오게 해줘야한다.

해결
- 변수로 선언을 해줘서 myString을 x의 기준에 맞춰서 나누어준다.
- 그 이후 반복문을 사용을 해서 x의 길이를 구해준뒤 이것을 빈 배열의 안으로 넣어주었다.
*/
