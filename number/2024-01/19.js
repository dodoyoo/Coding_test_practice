// 주사위 게임 1

/* 
문제

1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.
* a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
* a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
* a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

제한사항
* a와 b는 1 이상 6 이하의 정수입니다.
*/

function solution(a, b) {
  if (a % 2 === 1 && b % 2 === 1) {
    return a ** 2 + b ** 2;
  } else if ((a % 2 === 1 && b % 2 === 0) || (a % 2 === 0 && b % 2 === 1)) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
}

/*
고민
- 제한 사항은 3가지가 있다.
1.  a, b 모두 홀수라면 a2 + b2
2.  a, b 중 하나만 홀수라면 2 x (a+b)
3.  a, b 둘다 홀수가 아니라면 |a - b|
- 3가지가 모두 경우의 수를 의미하므로 조건문을 사용을 해줘야한다.

해결
- 나오는 값들을 조건문으로 만들어 준다.
- 조건문을 사용하고 |a-b|는 절댓값을 의미하고 제곱근은 **n을 사용해야한다는 것을 잊지마라
- 또한 절댓값을 알기 위한 함수는 Math.abs()를 사용한다.
*/
