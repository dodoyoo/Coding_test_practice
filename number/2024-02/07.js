// 조건에 맞게 수열 변환하기 1

/*
문제
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
* 1 ≤ arr의 길이 ≤ 1,000,000
    * 1 ≤ arr의 원소의 값 ≤ 100
*/

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      answer[i] = arr[i] / 2;
    } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
      answer[i] = arr[i] * 2;
    } else {
      answer[i] = arr[i];
    }
  }
  return answer;
}

/*
고민
- 50보다 크거나 같은 짝수라면 2로 나눈다
- 50보다 작은 홀수라면 2를 곱한다.
- For? if로 충분히 될것같기도..?

해결
- 문제에 있는 것을 그대로 코드로 녹였다.
- if문을 작성할 때 arr의 배열을 사용하여 해야한다.
*/
