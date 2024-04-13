// 문자열 묶기

/*
문제
문자열 배열 strArr이 주어집니다.
strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 
가장 개수가 많은 그룹의 크기를 return하는 solution 함수를 완성해 주세요.
*/

function solution(strArr) {
  const groups = {};

  strArr.forEach((str) => {
    const length = str.length;
    groups[length] = (groups[length] || 0) + 1;
  });
  return Math.max(...Object.values(groups));
}

/*
고민 
- 문자열의 길이가 같은 그룹끼리 묶어서 비교를 해줘야한다.
- 반복문을 사용?
- 길이가 가장 긴 숫자를 출력해줘야한다.

해결
- 그룹을 묶어 주기 위해서 {[]}의 형태로 묶어준다.

- 이것은 객체 내에 배열을 포함한 형태로, 이는 그룹으로 묶을 수 있다.

- 그룹으로 묶은 groups[length]는 현재 길이에 해당하는 그룹의 카운트를 타나낸다.
	-> 값이 존재하지 않으면 undefined

- (groups[length] || 0) + 1은 현재의 그룹 카운트를 가져오고, 만약 그룹이 없다면 0을 출력한다.
	-> 이후 + 1을 더해서 현재 그룹의 카운트를
	증가시킨다.
	-> +1을 하는 이유로는 새로운 문자열이
	발견될 떼 해당 길이의 그룹개수를 1씩 증가
	시킨다.
 
- 가장 큰 수를 반환해줘야하기 때문에 Math.max() 메서드를 사용

- forEach()를 써서 한번씩 출력해서 길이를 알아낸다
*/
