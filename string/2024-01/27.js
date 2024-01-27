// 더 크게 합치기

/* 
문제
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
* 12 ⊕ 3 = 123
* 3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

제한사항
* 1 ≤ a, b < 10,000
*/

function solution(a, b) {
  const strA = String(a) + String(b);
  const strB = String(b) + String(a);

  return strA >= strB ? Number(strA) : Number(strB);
}

/* 
고민
- a와b를 먼저 비교할 수 있는 비교문을 먼저 만들어야 한다.
- 그러면 조건문을 2개를 써주면 되지 않을까?
- 그래서 if문을 쓴 뒤 else if 를 사용해서 한다.
- a+b의 연산 return을 어떻게 내보내 줘야하는가….
- return을 어떻게 해주는것만 하면 될듯한데…


해결
- 나는 이거를 해결하기 위해서
function solution(a,b) {
	var answer = 0;
	if ( a + b > b + a) {
	return a + b
} else if (b + a > a + b) {
	return b + a
}

return answer
}

다음과 같이 생각을 하여 풀이를 하였다.
하지만 코드를 실행해보니까 실행이 되지 않았고, 문제를 다시 생각해보아야했다.
- 숫자로 생각을 해야하는게 아니라 이 연산자를 문자열로 바꿔야 한다는것을 생각해냈다.
- 그렇게 해서  a와 b가 더해진것을 변수 strA로 선언을 하였으며
- 이것을 사용하여 해결을 하였다.
*/
