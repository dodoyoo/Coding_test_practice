// 문자열 여러 번 뒤집기

/*
문제
문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
queries의 원소는 [s. e]형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, queries) {
  let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}

/*
고민
- my_string을 쪼개주고 뒤집는 메서드를 이용해서 범위를 정해준다.

해결
- my_string을 쪼개준 뒤 forEach()를 사용해서 한번씩 출력하게 해준다
- 그 이후 출력되어야 할 것들을 reverse를 해주고 마지막으로 join을 해줘서 문자열로 나오게 해준다.
*/
