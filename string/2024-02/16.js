// 원하는 문자열 찾기

/*
문제
알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
단, 알파벳 대문자와 소문자는 구분하지 않습니다.

제한사항
* 1 ≤ myString의 길이 ≤ 100,000
* 1 ≤ pat의 길이 ≤ 300
* myString과 pat은 모두 알파벳으로 이루어진 문자열입니다.
*/

function solution(myString, pat) {
  const string = myString.toUpperCase();
  const myPat = pat.toUpperCase();

  if (string.includes(myPat)) {
    return 1;
  }
  return 0;
}

/*
고민
- 문자열이 주어지고 원하는 문자열을 찾아야한다. 
- 그렇다면 조건문이 있어야할 것 같고 반복문이 필요할까?

해결
- 먼저 문제에서 힌트를 찾아야한다. 
- 대 소문자를 구분하지 않는다고 했으니 주어진 myString과 pat을 대문자나 소문자로 먼저 설정을 해주어야한다.
- 이후 조건문을 사용해서 그 안에 includes()메서드를 사용하여 포함 한다면 return 1을 해주고 그렇지 않으면 0을 return할 수 있도록 해준다.

*/
