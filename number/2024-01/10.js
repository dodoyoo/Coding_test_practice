//n개 간격의 원소들

/* 문제
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
* 5 ≤ num_list의 길이 ≤ 20
* 1 ≤ num_list의 원소 ≤ 9
* 1 ≤ n ≤ 4
*/

function solution(num_list, n) {
  let num = [];
  for (let i = 0; i < num_list.length; i += n) {
    num.push(num_list[i]);
  }
  return num;
}

/* 
고민
- N번째에서 숫자가 나올 수 있도록 해야하니까 반복문을 써야함
- I++(증감식) 이거는 i+=1 이거와 같은 형태이다.

해결
- 반복문을 사용할 때 증감식이 항상 i++일 수는 없다.
- 그렇기에 나는 i+=2를 해보니 test1만 통과를 하였고, i+=2라고 작성을 하였을 때 문제를 해결 할 수 있었다.
*/
