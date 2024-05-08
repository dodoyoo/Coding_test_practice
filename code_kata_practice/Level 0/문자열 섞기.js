// 문자열 섞기

/*
문제
길이가 같은 두 문자열 str1 과 str2이 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return하는 solution 함수를 완성해 주세요.
*/

function solution(str1, str2) {
  return [...str1].reduce((acc, cur, idx) => acc + cur + str2[idx], '');
}

// console.log(solution('aaa', 'bbb')) => 'ababab'

function solution(str1, str2) {
  let answer = '';
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}

// console.log(solution('aaa', 'bbb')) => 'ababab'

/*
해결
- Reduce 메서드를 사용하면 간단하게 풀 수 있다.
- reduce에는 4가지의 인자를 가지는데 1. 누산기(acc) 2. 현재 값(cur) 3. 현재 인덱스(idx) 4. 원본 배열(src)
- 이렇게 나는 3개의 인자를 가지는 것으로 풀이를 하였다.
- str1을 먼저 쪼개준 다음 이를 reduce를 사용해서 누산기, 현재 값, str2에 인덱스를 넣어서 return을 한다.
- 이렇게만 한다면 값은 “aabab”로 나오게 된다.
- 이렇게 나오는 이유는 reduce() 누산기를 초기화해야한다. 하지만 초기값이 없으면 첫번째 요소를 사요하게 된다.
- 하지만 내가 쓴 코드에서는 초기값을 설정하지 않았으므로 첫번째 요소를 초기값으로 사용하게 된다.
- 초기값이 없는 reduce는 두 번째 요소 부터 시작이 되므로 빈문자열 “”를 사용하여 초기값으로 설정하여 이 문제를 해결할 수 있다.
*/
