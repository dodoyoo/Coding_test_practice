// 뒤에서 5등 위로

/*
문제
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
  let num = num_list.sort((a, b) => a - b);
  return num.slice(5);
}

/*
-> 한 줄로 간결하게 사용한다면
function solution(num_list) {
	return num_list.sort((a, b) => a - b).slice(5)
}

return num.slice를 사용하는게 아닌 바로 return을 해서 sort후 slice를 바로 사용해주면 된다.


고민
- 먼저 수를 작은 순서대로 배열 재 배치하기
- 그 이후 앞에서 5개 숫자를 짤라서 출력하면 된다.

해결
- 숫자를 작은 순서대로 배치하려면 sort(a, b) => a -b 를 해주면 작은 순서대로 출력할 수 있다.
- 그 이후 slice(5)를 사용해서 앞에서 5개를 짤라서 출력할 수 있다. 
*/
