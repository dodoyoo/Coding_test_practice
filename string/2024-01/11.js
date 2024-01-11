공배수;

/*
 문제
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
* 10 ≤ number ≤ 100
* 2 ≤ n, m < 10

*/

function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else {
    return 0;
  }
}

/*
고민 
- 만약 number가 n,m의 배수라면 return 1을 하고 Number가 n의 배수이지만 m의 배수가 아니라면 return 0을 한다.
위와 같이 문제를 해석을 하였고 이를 코드로 녹여냈다.


해결
- number가 n의 배수가 되기 위해서는 n으로 number를 나눌 수 있어야한다. 그렇기에 똑같이 m도 해주었고 이를 해당하도록 return을 해 줄 수 있도록 하였다.
*/
