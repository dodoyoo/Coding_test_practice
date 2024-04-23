// 특수문자 출력하기

/*
문제
다음과 같이 출력하도록 코드를 작성해 주세요.

출력 예시
!@#$%^&*(\'"<>?:;
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('close', function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

/*
해결
- 특수문자만 출력을 하기 위해서 백틱 ``을 사용해주었다.
- 하지만 백틱을 사용하면 \ <- 이게 누락이 되었다.
- \ 하나만 쓰게 된다면 escape가 되어 누락이 된다.
- 그래서 하나를 더 써줌으로 써 출력이 될 수 있도록 풀이를 해주었다.
*/
