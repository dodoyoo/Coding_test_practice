// 세로 읽기

/*
문제
문자열 my_string과 두 정수 m, c 가 주어집니다.
my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌
글자들을 문자열로 return하는 solution 함수를 작성해 주세요.


제한사항
* my_string은 영소문자로 이루어져 있습니다.
* 1 ≤ m ≤ my_string의 길이 ≤ 1,000
* m은 my_string 길이의 약수로만 주어집니다.
* 1 ≤ c ≤ m
*/

function solution(my_string, m, c) {
  var answer = '';
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }
  return answer;
}
// console.log(solution('programmers', 1, 1))
// => "programmers"
// console.log(solution('ihrhbakrfpndopljhygc, 4, 2))
// => "happy"

/*
고민 
- m은 글자 수 몇개씩 쓸 것인지를 나타낸다. 즉 열을 의미한다.
- c는 열의 n번째를 의미한다. (예를 들면 m이 4라면 4열까지 존재하는 것이고 c가 2면 2열을 세로 읽기를 하는 것을 의미한다.)
- my_string이 주어지면 이것을 먼저 하나씩 쪼개준다. 그 후 m의 숫자만큼 나열한다.
- 그 후 c가 주어지면 c의 숫자의 열의 세로로 return할 수 있도록 한다.

해결
- 반복문을 사용해서 m 글자씩 나누어준다.
- 그 이후 i+m을 해줘서 m 글자씩 나누어 주고
- answer += my_string[i + c -1]을 해줘서 c열에 있는 문자열을 출력할 수 있도록 한다.
- i + c -1로 설정을 해야하는 이유는 i는 현재 줄의 시작 위치를 나타내고 c는 찾고자 하는 열의 위치이다.
- 만약 c가 1부터 시작한다고 하면 c =1은 첫번째 열을 의미한다.
- i는 현재 줄의 시작 위치이므로, i + c는 두번째 열을 의미하게 된다. 
- 그렇기 때문에 -1을 해줘야 c에 설정된 열을 찾을 수 있게된다.
- [] 대괄호를 사용하는 이유는 특정 위치에 있는 문자를 선택해야한다. 
- 그래서 열에 해당하는 문자들을 찾아서 배열에 담아 출력을 한다면 이는 문자열로 출력이된다.
*/
