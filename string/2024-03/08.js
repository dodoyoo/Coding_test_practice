// A 강조하기

/*
문제
문자열 myString이 주어진다.
myString에서 알파벳 “a”가 등장하면 전부 “A”가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return하는 solution 함수를 완성하세요.
*/

function solution(myString) {
  return myString.toLowerCase().replaceAll('a', 'A');
}

/*
해결
- 이 문제는 어려움이 있지는 않았다.
- myString 단어를 모두 소문자로 변환을 해준다.
- 그 이후 소문자로 바꾼 것에서 replaceAll()을 사용해서 “a”를 “A”로 바꿔준다고 설정을 해주면 된다.
*/
