// 특정한 문자를 대문자로 바꾸기

/*
문제
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

/*
    고민
    - my_string안에 alp가 속해있으면 str에 모든 alp를 대문자로 바꿔줘야한다.
    - 바꿔줘야하는것이니까 메서드를 생각해봐야한다.
    
    해결
    - my_string에 alp가 있는것을 바꿔줘야하니 나는 replace()를 사용했다. 
    - replace()를 사용했을 때 케이스는 성공했지만 모든 문제에서 정답이 나오지는 않았다.
    - 그이유는 alp가 포함하지 않으면 그대로 변환을 해줘야하는데 그것이 안되기 때문이다.
    - 그래서 내가 생각한 메서드는 replaceAll()메서드였다.
    - includes()메서드를 사용해서 설정을 해줄 수 있지만 더 간단하게 출력하기 위해서 replaceAll() 메서드만 사용했다.
    - replaceAll(a, b) 메서드를 사용하기 위해서는 a에는 내가 바꿀 것을, b에는 어떻게 변환시킬 것인지를 설정해준다. 
    
    */
