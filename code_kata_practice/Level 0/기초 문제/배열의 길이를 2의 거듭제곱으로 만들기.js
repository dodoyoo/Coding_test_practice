// 배열의 길이를 2의 거듭제곱으로 만들기

/*
문제
정수 배열 arr이 매개변수로 주어집니다.
arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다.
arr에 최소한의 개수로 0을 추가한 배열을 return하는 solution 함수를 작성해 주세요.
*/

function solution(arr) {
  const length = arr.length;
  while ((arr.length & (arr.length - 1)) !== 0) {
    arr.push(0);
  }
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); //[58, 172, 746, 89]

/*
고민
- arr의 길이가 2의 거듭제곱인지 아닌지를 판별해야한다.
- 반복문을 사용하고 조건문을 사용해서 2의 거듭제곱이라면 그대로 출력, 아니라면 0을 추가한다.
- 길이가 5라면 0을 3개를 추가해야하고 3이라면 0을 1개를 추가해야한다.
- push()메서드를 사용해서 배열에 0을 추가하고 2의 거듭제곱이 될 수 있도록 0을 추가

해결
- 반복문을 사용하지 않고 while을 사용하여 문제를 풀이해주었다.
- while()은 조건이 참이 되었을 때 반복해서 실행해주는 것을 의미한다.
- 그래서 ‘거듭제곱일 때’ 를 조건으로 만들어서 push를 사용해서 0을 추가해주는 방식으로 풀이하였다. 
*/
