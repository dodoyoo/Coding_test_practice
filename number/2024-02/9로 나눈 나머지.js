// 9로 나눈 나머지

/*
문제
음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

제한사항
* 1 ≤ number의 길이 ≤ 100,000
* number의 원소는 숫자로만 이루어져 있습니다.
* number는 정수 0이 아니라면 숫자 '0'으로 시작하지 않습니다.
*/

function solution(number) {
  let answer = number.split('').map(Number);
  let sum = answer.reduce((a, b) => a + b, 0);
  let remain = sum % 9;

  return remain;
}

/*
고민
- 각 자리에 있는 수를 더해주고 그것을 9로 나눈 것의 나머지를 return 해줘야한다.
- 소수 첫번째 자리까지를 출력하는 것을 생각하자
    
해결
- 내가 생각한 방안으로는 map과 reduce를 사용하는 것으로 생각했다.
- 그래서 주어진 문자열의 수를 split으로 쪼개준 다음 다시 map()을 사용해서 Number로 바꿔준다.
- 그 이후 각 자리의 수를 더해줘야하기 때문에 reduce를 사용해서 a + b를 해주고 
- 마지막으로 나머지라는 변수를 설정해줘서 덧셈을 해준 것을 9로 나누어 주는 % 9를 해준다.
*/
