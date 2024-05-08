// 문자열을 정수로 변환하기

/*
문제
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

제한사항
* 1 ≤ n_str ≤ 5
* n_str은 0부터 9까지의 정수 문자로만 이루어져 있습니다.
*/

function solution(n_str) {
  var answer = parseInt(n_str);
  return answer;
}

/*
해결
- 나는 이 문제를 보고 어제 푼 문제와 바로 비슷하다는 생각을 하여
- 문자열을 숫자로 바꿔서 출력하는 메서드를 생각했다.
- parseint() 메서드를 생각해서 이를 이용하여 문제 풀이를 하였다.
*/
