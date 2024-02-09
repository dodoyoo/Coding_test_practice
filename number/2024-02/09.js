// 정수 찾기

/*
문제
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
* 3 ≤ num_list의 길이 ≤ 100
* 1 ≤ num_list의 원소 ≤ 100
* 1 ≤ n ≤ 100
*/

function solution(num_list, n) {
  let answer = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      return (answer = 1);
    }
  }
  return answer;
}

/* 
고민
- num_list안에 n이 있다면 1을 return, 없으면 0을 return
- 조건문을 사용해야함
- 그럼 반복문은?

해결
- 반복문은 당연히 써야하며 조건문에서 “num_list안에 배열 [i]를 사용하고 그것이 n이 있다면”을 조건으로 넣어준다면 return 1을 할 수 있도록 한다.
*/
