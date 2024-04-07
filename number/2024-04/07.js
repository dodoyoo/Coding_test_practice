// 수열과 구간 쿼리 3

/*
문제
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
queries의 원소는 각각 하나의 query를 나타내며, [i, j]꼴입니다.
각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return하는 solution함수를 완성해 주세요.
*/

function solution(arr, queries) {
  for (let query of queries) {
    let [i, j] = query;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/*
 해결
 - 반복문을 사용해서 문제 풀이를 하였다.
 - for…of루프는 배열의 요소를 반복하는데 사용한다.
 - query를 queries로 반복하게하고 
 - 변수를 사용해서 [i, j]를  query로 선언을 해준다.
 - 이후 i와 j를 바꾸는 게 목표이니 [i, j] = [j, i ]가 같다고 설정을 해준뒤 return을 해주게 되면 문제를 해결할 수 있다.
 */
