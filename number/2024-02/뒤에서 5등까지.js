// 뒤에서 5등까지

/*
문제
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 6 ≤ num_list의 길이 ≤ 30
* 1 ≤ num_list의 원소 ≤ 100
*/

function solution(num_list) {
  var answer = [];
  num_list.sort((a, b) => a - b);
  return num_list.slice(0, 5);
}

/*
고민
- 내가 생각해야하는것은 두가지 오름차순을 만들어야 하는것과, 가장 작은 5개의 수를 return하는것

해결
- 오름차순을 하기 위한 메서드는 sort()를 사용해주면 되고
- 5개의 수를 추출해야하니까 slice()도 사용을 해줘야한다.
- sort는 배열을 정렬해주는 메서드이다.
*/
