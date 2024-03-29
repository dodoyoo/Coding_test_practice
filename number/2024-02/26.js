// 배열의 원소만큼 추가하기

/*
문제
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ arr의 길이 ≤ 100
* 1 ≤ arr의 원소 ≤ 100
*/

function solution(arr) {
  var answer = [];
  arr.map((a) => {
    for (let i = 0; i < a; i++) answer.push(a);
  });
  return answer;
}

/*
고민
- 배열을 추가를 해줘야한다.
- 반복문을 사용해줘야한다.


해결
- 이 문제는 의외로 간단했다. 내가 생각한 것은 map()을 사용해주고 그안에 반복문을 사용하는 방법으로 진행했다.
- 반복문을 사용할 때 arr가 아닌 map으로 설정했을때 사용한 a를 기준으로 하고 push메서드를 사용하여 출력할 수 있도록 해준다. 
*/
