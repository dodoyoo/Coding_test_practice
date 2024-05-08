// 공백으로 구분하기

/*
문제
단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* my_string은 영소문자와 공백으로만 이루어져 있습니다.
* 1 ≤ my_string의 길이 ≤ 1,000
* my_string의 맨 앞과 맨 뒤에 글자는 공백이 아닙니다.
*/

function solution(my_string) {
  // let answer = []; -> 사용을 하지 않으므로 쓰지 않아도 됨
  return my_string.split(' ');
}

/*
고민
- 문제를 해석해 보면 [] 안에서 단어가 순서대로 나오게 해줘야한다.
	Ex) “ I love you” => [“I”, “love”, “you]

해결
- If문 필요없고, for문도 필요하지 않다.
- 설정되어있는 let answer =[]; 여기에서 return을 어떻게 해주는가에 대해 생각을 해주면 될 것 같다.
- 하지만 지금 answer을 불러주는 메서드는 없지만 굳이 불러지 않아도 코드는 실행이된다.
    그렇기 때문에 문제에서는 let answer =[];이 필요 하지는 않다.
*/
