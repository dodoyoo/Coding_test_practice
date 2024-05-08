// 문자열 뒤집기

/*
문제
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, s, e) {
  const subString = my_string
    .slice(s, e + 1)
    .split('')
    .reverse()
    .join('');
  return my_string.slice(0, s) + subString + my_string.slice(e + 1);
}
/*
고민
- s부터 e까지의 문자열을 뒤집어서 return을 해줘야한다.
- 그러면 그 단어들을 한글자씩 찢어줘야한다.
- 그러고 뒤집어주고 return을 해주면 된다.

해결
- slice(s, e+1)을 설정을 해준다. e까지라고 하면 e는 해당이 되지 않는다.
- 그렇기 때문에 e+1까지로 설정을 해줘야 e가 포함이 된다. 그래서 slice를 설정을 해줘서 구간을 설정을 해준다.
- 그 이후 split를 사용해줘서 한문자씩 찢어준다.
- reverse()를 사용해서 문자를 뒤집어준다. 
- join()을 사용해서 찢어준 문자를 한 문자로 묶어준다.
- 설정을 하고 return할때는 처음부터 s까지 먼저 설정을 해주고, 내가 설정한 subString을 더해준다.
*/
