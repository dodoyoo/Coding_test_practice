// 조건에 맞게 수열 변환하기 2

/*
문제
정수 배열 arr가 주어집니다. 
arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 
50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때,
arr(x) = arr(x + 1)인 x가 항상 존재합니다. 
이러한 x중 가장 작은 값을 return하는 solution 함수를 완성해 주세요.

단, 두 배열에 대한 “=“는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
*/

function solution(arr) {
  let answer = 0;
  let newArr = arr;

  while (true) {
    const changeArr = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] >= 50 && newArr[i] % 2 === 0) {
        changeArr.push(newArr[i] / 2);
      } else if (newArr[i] < 50 && newArr[i] % 2 === 1) {
        changeArr.push(newArr[i] * 2 + 1);
      } else {
        changeArr.push(newArr[i]);
      }
    }

    const allArr = newArr.every((a, i) => a === changeArr[i]);
    if (allArr) break;
    answer += 1;

    newArr = changeArr;
  }
  return answer;
}

/*
고민
- 반복문 안에 조건문을 넣어서 먼저 설정을 해준다
- 50보다 크거나 같은 짝수 2로 나눔
- 50보다 작은 홀수 2를 곱하고 +1

해결
- arr를 새로운 변수로 선언을 해주고 while을 사용해서 참일때 실행할 수 있도록 한다.
- 그 후 빈 배열을 선언해주고 반복문 안에 조건문을 설정해준다.
- every() 메서드 사용해주고 비교를해주고 while을 끝낼 수 있도록 break을 해준다.
- changeArr가 newArr가 될 수 있도록 같다고 해주면 해결할 수 있다.
*/
