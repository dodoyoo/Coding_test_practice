// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

/*
문제
문자열 myString과 pat이 주어집니다.
myString의 부분 문자열 중 pat으로 끝나는 가장 긴 부분 문자열을 찾아서 return하는 solution 함수를 완성해 주세요.
*/

function solution(myString, pat) {
  let longestSubstring = '';
  for (let i = 0; i < myString.length; i++) {
    const currentSubstring = myString.slice(0, i + 1);
    if (currentSubstring.endsWith(pat)) {
      longestSubstring = currentSubstring;
    }
  }

  return longestSubstring;
}

/*
고민 
- 끝나는 문자열이 pat
- end부분을 설정을 해준다
- 그러면 for?을 설정해주고 slice를 사용하면서 end부분을 하면?
*/
