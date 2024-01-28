// 원소들의 곱과 합

/*
문제

정수가 담긴 리스트 num_list가 주어질 때, 
모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 
크면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
*/

function solution(num_list) {
  let product = 1;
  for (let i = 0; i < num_list.length; i++) {
    product *= num_list[i];
  }
  let sum = 0;
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
  }
  if (product < Math.pow(sum, 2)) {
    return 1;
  }
  return 0;
}

/*
고민
- 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1
   크면 1을 return해준다.
- 그러면 곱과 합이 되도록 먼저 만들어주고
- 그 나온 값을 비교할 수 있도록 만들어줘야한다.

해결
- 첫번째로 곱을 알 수 있는 식을 선언하고 두번째로 합을 알 수 있는 식을 선언한다.
- 그렇게한뒤 곱을 중심으로 하여 Math.pow()를 사용하여 조건문을 작성하여 1을 return 할지 0을 return할지 설정한다.
*/
