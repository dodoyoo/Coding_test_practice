// 첫 번째로 나오는 음수

/* 
문제
정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

제한사항
* 5 ≤ num_list의 길이 ≤ 100
* -10 ≤ num_list의 원소 ≤ 100

*/

function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

/*
고민
- 리스트에 음수가 있다면 배열의 위치를 return 해주고 음수가 없다면 -1을 return 해주면된다.
- 그렇다면 반복문을 사용해줘야할까?

해결
- 반복문을 사용하고 반복문 안에 조건문을 사용하여 해결했으며
- 반복문 안에는 반복문에 사용한 i를 사용하여 return을 해주었으며
- i가 음수라는 조건을 걸어서 i를 return 해주었으며 그것이 아니라면 -1을 return할 수 있도록 하였다.
*/
