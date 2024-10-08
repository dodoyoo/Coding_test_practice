// 머쓱이보다 키 큰 사람

/*
문제
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
머쓱이 네 반 친구들의 키가 담긴 정수 배열 array와 
키 height가 매개변수로 주어질 때,
머쓱이보다 키큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0

// case 2
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}
