// 마지막 두 원소

/*
문제
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

제한사항
* 2 ≤ num_list의 길이 ≤ 10
* 1 ≤ num_list의 원소 ≤ 9
*/

function solution(num_list) {
  let arr1 = num_list[num_list.length - 1];
  let arr2 = num_list[num_list.length - 2];

  if (arr1 > arr2) {
    num_list.push(arr1 - arr2);
  } else if (arr1 <= arr2) {
    num_list.push(arr1 * 2);
  }
  return num_list;
}

/*
고민
- 마지막 원소가 그 전 원소보다 크면 마지막 원소에서 그 전 원소를 밴 값을 return
- 마지막 원소가 그 전 원소보다 크지 않으면 마지막 원소를 두배한 값을 추가하여 return
- 반복문을 사용하고 조건문으로 클 때와 작을 떄를 설정해준다면 되지 않을까?

해결
- 먼저 마지막 원소와 마지막의 그 전 원소를 먼저 설정을 해준다. num_list[num_list.length-1] -> 이게 마지막 원소를 의미한다.
- 마지막 원소를 설정해준 뒤 새롭게 배열을 배출해야하기 때문에 push()를 사용해야한다.
- 그래서 조건문을 사용하여 값을 풀어주고 반드시 마지막은 호출해야할 것을 해줘야한다.
*/
