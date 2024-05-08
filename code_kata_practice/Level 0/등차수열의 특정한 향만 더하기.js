// 등차수열의 특정한 항만 더하기

/*
문제
두 정수 a, d와 길이가 n인 boolean배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return하는 solution 함수를 작성해 주세요.
*/

function solution(a, d, included) {
  var answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + i * d;
    }
  }
  return answer;
}

/*
해결
- 문제에서 n은 included의 길이에서 나온다고 주어졌다.
- included[i]가 i +1항을 의미한다고 하였다.
- 또한 공차 d가 주어지니까 첫항은 a, 이후 항은 a + d, a + 2d, a + 3d로 주어지게 된다.
- 결국 boolean값으로 주어진다고 하였으니 이 식을 사용하여 조건문과 반복문을 활용해주면 풀 수 있다.
*/
