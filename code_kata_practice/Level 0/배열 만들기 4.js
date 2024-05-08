// 배열 만들기 4

/*
문제
정수 배열 arr가 주어집니다. 
arr를 이용해 새로운 배열 stk를 만드려고 합니다.

변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.

* 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
* stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
* stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.

위 작업을 마친 후 만들어진 stk를 return하는 solution 함수를 완성해 주세요.
*/

function solution(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }
  return stk;
}

/*
고민
- 문제에서 i가 주어지고 길이가 작으면 작업을 반복한다고 하였다.
- 그 후 작업이 주어져있으니 조건문으로 이를 설정해서 진행하면 될듯

해결
- 문제에서 주어진대로 풀이를 하였다.
- 반복문을 사용해주고 그 안에 조건문을 추가했다.
*/
