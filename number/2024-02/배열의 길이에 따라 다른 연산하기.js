// 배열의 길이에 따라 다른 연산하기

/*
문제
정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(arr, n) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0 && i % 2 !== 0) {
      answer.push(arr[i] + n);
    } else if (arr.length % 2 !== 0 && i % 2 === 0) {
      answer.push(arr[i] + n);
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

/*
  고민
  - 길이가 홀수인지 짝수인지를 설정을 해줘야한다.
  - 그 길이에 짝수자리 수에 n, 홀수자리 수에 n을 더해줘야한다.
  
  
  해결
  - 홀수인지 짝수인지를 먼저 설정을 해주기위해서 홀수, 짝수와 짝수, 홀수로 조건문을 설정한다.
  - 그 이후로 answer에 더해줘야하기 때문에 push를 사용하여 배열을 추가해줘야한다.
  */
