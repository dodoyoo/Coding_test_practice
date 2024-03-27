// 문자열 잘라서 정렬하기

/*
문제
문자열 myString이 주어집니다. 
“X”를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return하는 solution 함수를 완성해 주세요.

단 빈 문자열은 반환할 배열에 넣지 않습니다.

제한사항
* 1 ≤ myString ≤ 100,000
* myString은 알파벳 소문자로 이루어진 문자열입니다.

*/

function solution(myString) {
  return myString
    .split('x')
    .sort()
    .filter((v) => v);
}

/*
해결
- 사전 순서로 배열을 해줘야하기 때문에 sort()메서드를 사용해준다.
- “X”를 제거해야하기 때문에 split()메서드를 사용해준다.
- split() & sort()만 사용을 했을 때 빈 문자열이  함께 출력되는 것을 볼 수 있다.
- 빈 문자열을 제거 해주기 위해서 filter()를 사용해줘서 빈 문자열을 제거할 수 있도록 사용한다.
*/
