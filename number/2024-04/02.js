// 수열과 구간 쿼리 1

/*
문제
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

각 query마다 순서대로 s <= I <= e인 모든 i에 대해 arr[i]에 1을 더합니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return하는 solution함수를 완성해 주세요.
*/

function solution(arr, queries) {
  queries.forEach((query) => {
    let start = query[0];
    let end = query[1];
    for (let i = start; i <= end; i++) {
      arr[i]++;
    }
  });
  return arr;
}

// let arr = [0, 1, 2, 3, 4];
// let queries = [[0, 1], [1, 2], [2, 3]];
// console.log(solution(arr, queries)); => [1, 3, 4, 4, 4]

/*
해결
- 문제에서 주어진대로 query를 이용하였다.
- 그 이후 forEach()메서드를 사용하여 start와 end를 설정해주었다.
- 반복문을 사용해줌으로 써 문제의 조건에 맞게 설정을 하여 풀이를 하였다.
*/
