// 배열 만들기 6

/*
문제
0과 1로만 이루어진 정수 배열 arr이 주어집니다.
arr를 이용해 새로운 배열 stk을 만드려고 합니다.

i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.

* 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
* stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같다면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
* stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.

위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
*/

function solution(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.pop(stk.length - (1)[i++]);
    } else if (stk[stk.length - 1] !== arr[i]) {
      stk.push(arr[i++]);
    }
  }
  if (stk.length === 0) {
    return [-1];
  }
  return stk;
}

/*
해결
- stk가 빈배열로 주어지고 이것을 이용해 조건문과 반복문을 활용해서 문제풀이를 하였다.
- 문제의 마지막인 단, 만약 ~~~ 이부분에서 헷갈렸지만 조건문을 한번 더 작성하여 빈배열일 때 비교를 한번 더 진행하여 [-1]이 출력되도록 하였다.
*/
