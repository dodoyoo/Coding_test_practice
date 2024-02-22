// 두 수의 연산값 비교하기

/*
문제
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
* 12 ⊕ 3 = 123
* 3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

제한사항
* 1 ≤ a, b < 10,000
*/

function solution(a, b) {
  let str1 = a.toString() + b;
  let str2 = 2 * a * b;

  if (str1 > str2) return Number(str1);
  else return str2;
}

/*
고민
- A ⊕ b 가 붙여서 쓴값을 먼저 선언을 해준다.
- 그 이후 조건문을 사용해서 비교를 해준다

해결
- 변수를 두가지를 선언해준다.
- 그 이후 조건문을 사용해주고 string으로 변환해준 것을 number로 다시 만들어 준다.
*/
