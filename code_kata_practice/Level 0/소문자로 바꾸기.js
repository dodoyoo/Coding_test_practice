// 소문자로 바꾸기

/*
문제
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

제한사항
* 1 ≤ myString의 길이 ≤ 100,000
    * myString은 알파벳으로 이루어진 문자열입니다. 

*/

function solution(myString) {
  var answer = '';
  return myString.toLowerCase();
}

/*
고민
- 대문자와 바꾸기를 했을때와 같이 상황을 생각해봐야겠다.

해결
- 대문자로 바꾸는것은 toUpperCase()라는 메서드를 썻지만 
- 소문자로 바꾸는 것은 toLowerCase() 메서드를 쓰면 가능하다.
*/
