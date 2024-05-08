// 문자 개수 세기

/*
문제
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, 
my_string에서 ‘A’의 개수, my_string에서 ‘B’의 개수, …., my_string에서 'Z'의 개수,
 my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
  let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let b = [];

  b.length = 52;
  b.fill(0);
  my_string.split('').map((n) => {
    b[a.indexOf(n)] += 1;
  });
  return b;
}

/*
  고민
  - 나는 정규표현식으로 먼저 접근을 하였다.
  - Answer = /[A-Z]gi를 설정해주고 
      return my_string.match(answer)?.length || 0
  과 같은 형식으로 접근을 하였다.
  - 하지만 이 형식은 일치하는 문자열의 개수를 배열형식이 아닌 숫자 형식으로 나오게 되는것이다.
  
  해결
  - 그래서 나는 a에 대소문자를 변수로 선언해줬고
  - b에 배열을 설정해주었다.
  - 그 후 b의 배열의 길이를 52로 설정해주고 배열에 0을 추가하도록 fill()메서드를 사용했다.
  - my_string에 split()으로 쪼개주고 map을 사용해서 a에 indexOf()를 += 1을 하여 문제를 풀이한다.
  */
