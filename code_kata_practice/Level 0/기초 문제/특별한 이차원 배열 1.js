// 특별한 이차원 배열 1

/*
문제
정수 n이 매개변수로 주어질 때, 다음과 같은 n x n 크기의 이차원 배열 arr를 return하는 solution 함수를 작성해 주세요

- arr[i][j](0 <= i, j < n)의 값은 i = j 라면 1, 아니라면 0입니다.
*/

function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let result = [];
    for (let j = 0; j < n; j++) {
      result.push(i === j ? 1 : 0);
    }
    answer.push(result);
  }
  return answer;
}

// console.log(solution(3))
// [[1, 0 ,0], [0, 1, 0], [0, 0, 1]]

/*
  고민
  - i,j가 같으면 1 다르면 0을 출력해줘야함
  - 반복문은 필수
  - 배열 안의 배열 형태로 이루어져있음
  
  해결
  - 변수를 두개로 만들어줬다
  - 변수 하나를 i로, 또 다른 하나를 j로 만들어줬다.
  - 그렇게 한뒤 j를 이용한 곳에서 조건문을 만들어 주었고,
  - 이것을 첫번째 변수로 만든 배열안에 두번째 배열을 넣어서 출력하도록 push 메서드를 사용해 출력해주었다.
  */
