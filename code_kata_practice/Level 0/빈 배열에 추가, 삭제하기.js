// 빈 배열에 추가, 삭제하기

/*
문제
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
길이가 같은 정수 배열 arr과 boolean배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며
flag[I]가 true라면 x의 뒤에 arr[i]를 arr[i] * 2번 추가하고, 
flag[I]가 flase라면 x에서 마지막 arr[I]개의 원소를 제거한 뒤 x를 return하는 solution함수를 작성해 주세요.
*/

function solution(arr, flag) {
  var X = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        X.pop();
      }
    }
  }
  return X;
}
