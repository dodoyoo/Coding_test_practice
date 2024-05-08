// 이차원 배열 대각선 순회하기

/*
문제
2차원 정수 배열 board와 정수 k가 주어집니다.

i + j <=  k를 만족하는 모든 (i,j)에 대한 board[I][j]의 합을 return하는 solution 함수를 완성해 주세요.
*/

function solution(board, k) {
  var answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

// console.log(solution([[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]], 2))
// -> 8

/*
해결
- 입출력의 배열이 하나씩 나열이 되야 하니까 반복문을 사용을 해준다.
- 반복문을 2개 사용해준다. 이때 두번째 반복문에는 board의 [i]를 넣어주어야한다.
- 그러고 조건문을 사용해주는데 이때 조건은 문제에 나와있는대로 설정을 해준다. 
*/
