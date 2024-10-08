// 배열 원소의 길이

/*
문제
문자열 배열 strlist가 매개변수로 주어집니다.
strlist 각 원소의 길이를 담은 배열을 return하도록 
solution 함수를 완성해주세요.
*/

function solution(strlist) {
  let answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

console.log(solution(['We', 'are', 'the', 'world!'])); // [2, 3, 3, 6]

//case 2
function solution(strlist) {
  return strlist.map((el) => el.length);
}
