// 부분 문자열 이어 붙여 문자열 만들기

/*
문제
길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. 
parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미한다.
각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 
문자열을 return하는 solution 함수를 작성해 주세요
*/

function solution(my_strings, parts) {
  return my_strings
    .map((s, i) => s.slice(parts[i][0], parts[i][1] + 1))
    .join('');
}

/*
고민
- 문제에서 [i]가 있는것을 알려줬다. 그러면 for을 사용해서 해야할까?
- 그리고 부분 문자열을 이어 붙여야한다.

해결
- 나는 for문을 사용하지 않고 map을 사용하였다.
- 그리고 slice 메서드를 사용해서 parts의 부분을 설정해주는 것을 선택을 했다.
- 그래서 parts[i][0] 부터 parts[i][1]+1을 해주었다.
- 이렇게만 설정을 했을때 문자열이 찢어진 형태로 나오기 때문에 join 메서드를 사용해서 한문자로 이어주는 방법을 선택했다.
*/
