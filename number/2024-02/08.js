// n번째 원소부터

/* 
문제
정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 2 ≤ num_list의 길이 ≤ 30
* 1 ≤ num_list의 원소 ≤ 9
* 1 ≤ n ≤ num_list의 길이

*/

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

/*
고민
- N번째원소부터 마지막 원소 인것을 return해주어야한다.
- 그렇다면 메서드를 사용을 해주면 될듯하다.
- slice(n,?) 이렇게 하면 될듯한데 마지막이라는 것을 어떻게 설정해줘야할까?

해결
- slice() 메서드를 사용하는 것 까지는 캐치를 해 냈다.
- 문제에서 n부터 마지막 까지라고 이야기를 했으니까 n부터 - 1을 사용해서 마지막 까지라는 것을 알려줘야한다.
- -1이 아닌 - 1 이라고 해야한다.
*/
