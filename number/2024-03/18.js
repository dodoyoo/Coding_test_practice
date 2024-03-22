// 콜라츠 수열 만들기

/*
문제
모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고,
x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속 해서 반복하면 언젠가는
반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.

그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.

계산결과 1000보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져있습니다.

임의의 1000보다 작거나 같은 양의 정수 n이 주어질 때
초기값이 n인 콜라츠 수열을 return하는 solution 함수를 완성해 주세요.
*/

function solution(n) {
  const answer = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
}

/*
해결
- 이 문제는 문제를 이해할 수 없어서 블로그에 검색을 해보며 찾아보았다.
- 콜라츠 수열에 대해서 처음은 알 수 없었다.
- 주어진 수가 나오면 이 수가 식에 의해 1이 될때까지 만드는 수열이라는 것을 파악했다.
- 이것을 파악하고 난 후 while()을 사용하여 이것이 참이 되었을 때 조건문을 사용하여 코드를 작성하였다.
*/