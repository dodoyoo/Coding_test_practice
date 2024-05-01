// 정사각형으로 만들기

/*
문제
이차원 정수 배열 arr이 매개변수로 주어집니다.
arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 
이차원 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
  let row = arr.length;
  let col = arr[0].length;

  if (row > col) {
    for (let i = col; i < row; i++) {
      for (let j = 0; j < row; j++) {
        arr[j].push(0);
      }
    }
  } else if (row < col) {
    for (let i = row; i < col; i++) {
      arr.push(new Array(col).fill(0));
    }
  }
  return arr;
}
