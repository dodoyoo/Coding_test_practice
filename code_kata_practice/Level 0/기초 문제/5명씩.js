// 5명씩

/*
문제
최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.
*/

function solution(names) {
  let answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}

/*
고민
- 5명씩 끊어줘야한다.
- names는 배열안에 있는 문자
- Length 필요하다

해결
- 배얼이 선언되어있는것을 살려둬야한다.
- 반복문을 사용하고 names의 길이에 따라서 5명씩 끊어야하니 i +=5를 사용한다.
- 그런뒤 answer 즉 빈배열 안에 names[i]를 추가로 해준다. 이때는 push() 메서드를 사용한다.
*/
