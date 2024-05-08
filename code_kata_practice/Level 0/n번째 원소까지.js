// n번째 원소까지

/*
문제
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 2 ≤ num_list의 길이 ≤ 30
* 1 ≤ num_list의 원소 ≤ 9
* 1 ≤ n ≤ num_list의 길이 ___
*/

function solution(num_list, n) {
  return num_list.slice(0, n);
}

/*
고민
- 배열의 출력과 같다고 생각을 해야한다.
- Return은 배열이 되는거니까 num_list가 나와야하고
- n까지를 생각해야한다

해결
- 배열을 호출하기 위한 메서드를 사용한다.
- slice()를 사용하여 해주면 된다.
- 문제의 경우 0부터 n까지라고 했으니까 
	return num_list.slice(0,n)이라고 해주면 된다.
*/
