// 수열과 구간 쿼리 2

/*
문제
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution함수를 완성해 주세요.
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
*/

function solution(arr, queries) {
  let answer = [];
  for (let [s, e, k] of queries) {
    let temp = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    answer.push(temp ? temp : -1);
  }
  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
// [3, 4, -1]

/* 
해결
- 범위 [s, e, k]를 반복문으로 실행해준다.
- 작은것부터 나열해준 뒤 제일 작은 0번째 인덱스를 temp에 넣어준다.
- filter를 통해 조건에 맞는 요소 값들을 찾고, 찾아진 값들을 sort를 통해 정렬해서 0번째 인덱스의 값을 가져오면 가장 작은 원소를 찾을 수 있다.
*/
// 다른 코드

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
