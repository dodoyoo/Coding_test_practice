// 왼쪽 오른쪽

/*
문제
문자열 리스트 str_list에는 “u”, “d”, “l”, “r” 네 개의 문자열이 여러 개 저장되어 있습니다.
str_list에서 “l”과 ”r” 중 먼저 나오는 문자열이 “l”이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를
먼저 나오는 문자열이”r”이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 
return하도록 solution 함수를 완성해주세요.
*/

function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      return str_list.slice(0, i);
    } else if (str_list[i] === 'r') {
      return str_list.slice(i + 1);
    }
  }
  return [];
}

/*
  해결
  - 반복문을 사용해주었고 str_list에 ‘i’가 있다면 출력을 해주고
  - r이 있다면 출력이 되도록 범위를 설정해주었다.
  - 마지막 조건에서 두 문자열이 없다면 빈 배열이 출력되도록 해결하였다.
  */
