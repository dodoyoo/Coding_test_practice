//flag에 따라 다른 값 반환하기

/*
문제
두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

제한사항
* -1,000 ≤ a, b ≤ 1,000
*/

function solution(a, b, flag) {
  if (flag) {
    return a + b;
  } else {
    return a - b;
  }
}

/* 
고민 
- 문제를 글자로 해석을해보면
	만약 flag가 true라면 a+b, false라면 a -b 를 return하게 된다.
- flag를 boolean값으로 주어졌기 때문에 boolean을 어떻게 사용할 지 생각 해야한다.

해결
- 이번 문제는 상당히 쉬운 문제라고 생각했다.
- 왜냐하면 말 그대로 코드를 작성하면 됐기 때문이다.
- 그래서 나는 말 그대로 코드를 작성하고 실행을 하였더니 정답을 받았다.
*/
