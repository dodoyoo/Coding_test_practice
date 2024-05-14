// 문자열이 몇 번 등장하는지 세기

/*
문제
문자열 myString과 pat이 주어집니다.
myString에서 pat이 등장하는 횟수를 return하는 solution 함수를 완성해 주세요.
*/

function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }
  return count;
}

console.log(solution('banana', 'ana')); // 2
console.log(solution('aaaa', 'aa')); // 3

/*
 해결
 - 반복문을 사용해주고 i의 범위 설정을 잘 해줘야한다.
 - 포함이 되어있는지를 확인을 해야하기 때문에 범위는 myString의 길이와 pat의 길이를 빼주는 것이 좋다.
 - 그러고 조건문에 slice를 사용하고 pat이 발견될때마다 숫자를 +해준다.
 - 그래서 ++를 통해서 풀이를 해주면 된다.
 */
