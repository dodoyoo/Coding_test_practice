// 날짜 비교하기

/*
문제
정수 배열 date1 & date 2가 주어집니다.
두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 
각 배열에서 year는 연도, month는 월, day는 날짜를 나타냅니다.

만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return하는 solution함수를 완성해 주세요.
*/

function solution(date1, date2) {
  const [year1, month1, day1] = [...date1];
  const [year2, month2, day2] = [...date2];

  if (year1 < year2) {
    return 1;
  } else if (year1 === year2) {
    if (month1 < month2) {
      return 1;
    } else if (month1 === month2) {
      if (day1 < day2) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/*
  고민
  - 조건문을 사용해서 date1이 date2보다 앞서는 날짜면 1을 같거나 느리면 0을 return 해준다.
  - 날짜를 비교해주는 것이기 때문에 길이로 해주는게 아닌 숫자를 비교를 해야할것같은데
  
  해결
  - 전개연산자로 쪼개준 date1과 2를 연도, 월, 날짜 순서로 배열에 담은 변수로 만들어준다.
  - 두가지를 비교해줄 것인데 연도와 월, 일을 하나씩 비교를 해준다.
  - year1이 year2보다 작을 때 1을 return해주는데 이 이유는 date1의 연도가 date2의 연도보다 전 연도이기 때문에 1을 return해주는 것이다.
  */
