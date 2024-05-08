// 문자열 겹쳐쓰기

/*
문제
문자열 my_string, overwrite_string과 정수 s가 주어집니다.
문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을
return하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

/*
고민
- forEach()를 사용해서 한번씩 실행해주고 이후 join을 사용해서 문자열로 출력해주면 되지 않을까
- Slice 범위를 해서 0부터 s까지 하고 s부터 마지막 까지 출력을 하면되지 않나

해결
- slice 메서드를 사용해서 범위를 설정해주었다.
- 0부터 s까지 출력하는것을 먼저 해주고 이후 overwrite_string이 나올수 있도록 더해준 뒤
- 다시 한번 s + overwrite_string을 사용해줘서 출력해주었다.
*/
