//  조건 문자열

/*
문제
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

* 두 수가 n과 m이라면
    * ">", "=" : n >= m
    * "<", "=" : n <= m
    * ">", "!" : n > m
    * "<", "!" : n < m

두 문자열 ineq와 eq가 주어집니다.
ineq는 “<“ 와 ”>” 중 하나고, eq는 “=“ 와 “!” 중 하나입니다.
그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 
return하도록 solution함수를 완성해 주세요.
*/

function solution(ineq, eq, n, m) {
  if (eq === '=' && n === m) return 1;
  if (ineq === '<' && n < m) return 1;
  if (ineq === '>' && n > m) return 1;
  return 0;
}

/*
해결
- 문제에서 주어진 조건문을 활용해서 문제를 풀이하였다.
*/
