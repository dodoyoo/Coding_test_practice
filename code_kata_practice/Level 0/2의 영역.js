// 2의 영역

/*
문제
정수 배열 arr가 주어집니다. 
배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return하는 solution 함수를 완성해 주세요.

단 arr에 2가 없는 경우 [-1]을 return합니다.
*/

function solution(arr) {
  const start = arr.indexOf(2);
  const end = arr.indexOf(2);

  return start + end < 1 ? [-1] : arr.slice(start, end + 1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
console.log(solution([1, 1, 1])); // [-1]

/*
고민
- 2가 포함되어 있는 부분 배열을 반복해야한다.
- 2가 없다면 -1을 return
- 그러면 slice()를 사용해서 2가 시작하는 부분과 끝나는 지점을 설정하면 되지 않을까?

해결
- 시작과 끝을 설정해주기 위해서 indexOf()메서드를 사용하여 변수로 설정을 한다.
- indexOf()메서드는 배열에서 주어진 요소를 찾을 수있는 첫번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환하게 된다.
- 이후 배열 안에 2를 찾기 위해서 배열의 순서를 설정해준다.
*/
