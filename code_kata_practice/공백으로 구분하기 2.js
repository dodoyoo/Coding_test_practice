// 공백으로 구분하기2

/*
문제
단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
  return my_string.trim().split(/\s+/);
}

/*
고민
- 문자열이 하나씩 떨어지게 출력을 해주면 된다.
- 주어진 문자열에 공백이 있기 때문에 공백을 없애주는 메서드를 사용한다.

해결
- 문자열의 공백을 없애주기 위해서 trim() 메서드를 사용한다.
- 문자열을 하나씩 떨어지게 출력하기 위해서 split(‘ ‘)를 사용한다.
- 하지만 문자 간의 공백이 있기 때문에 이것을 해결해주기 위해서 정규 표현식을 사용했다.
- 정규 표현식은 /\s+/를 사용해서 문자열의 간격에 공백을 없애주면된다.
*/

/*다른 풀이

-> 다른 풀이 방법으로는 split(‘ ‘)를 사용하고 filter() 메서드를 사용하는 것이다.
-> filter() 메서드를 사용하게 되면 다음과 같이 사용할 수 있다.
*/
function solution(my_string) {
  return my_string
    .trim()
    .split(' ')
    .filter((my_string) => my_string);
}
