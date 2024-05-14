// 배열에서 문자열 대소문자 변환하기

/*
문제
문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

제한사항
* 1 ≤ strArr ≤ 20
    * 1 ≤ strArr의 원소의 길이 ≤ 20
    * strArr의 원소는 알파벳으로 이루어진 문자열 입니다.
*/

function solution(strArr) {
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 1) {
      strArr[i] = strArr[i].toUpperCase();
    } else {
      strArr[i] = strArr[i].toLowerCase();
    }
  }
  return strArr;
}

/*
고민
- 대문자와 소문자를 구분해주는 문제다.
- 배열에 해당하는 것만 출력할 수 있도록 해줘야한다.

해결
- 먼저 홀수와 짝수를 나눠줘야한다.
- 그래서 반복문 안에 조건문을 사용해서 홀수를 지정해주고, 홀수일때 대문자를 쓸 수 있도록 해준다.
- strArr을 주어줬으니 strArr[i] = strArr[I].toUpperCase()를 사용해 줘서 대문자를 사용하도록 한다.
*/
