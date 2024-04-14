// 세 개의 구분자

/*
문제
임의의 문자열이 주어졌을 때 문자 “a”, “b”, “c”를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 “baconlettucetomato”라면 나눠진 문자열 목록은 [“onlettu”, “etom”, “to”]가 됩니다.

문자열 myStr이 주어졌을 때 위 예시와 같이 “a”, “b”, “c”를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 [“EMPTY”]를 return합니다.
*/

function solution(myStr) {
  let result = myStr.split(/[abc]+/).filter((str) => str !== '');

  if (result.length === 0) {
    return ['EMPTY'];
  }
  return result;
}

/*
고민
- A,b,c를 사용해서 문자열을 구분해주는것
- 주어진 문자열에서 기준이 되는것에서 지워주고 기준을 통해서 잘라줘야한다?
- 조건문이 있어야함 확실
- 정규표현식으로 할 수 있지 않을까?

해결
- 정규표현식을 사용해서 먼저 쪼개줬다. 
- 그 후 filter를 사용하였으며 조건문을 통해여 empty 조건까지 맞춰서 출력해주었다.
*/
