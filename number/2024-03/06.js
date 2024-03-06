// 배열의 원소 삭제하기

/*
문제
정수 배열 arr 과 delete_list가 있습니다. arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return하는 solution 함수를 작성해 주세요.
*/

function solution(arr, delete_list) {
  return arr.filter((list) => !delete_list.includes(list));
}

/*
고민 
- Arr 배열 안에 delete_list가 있다면 delete를 해준다.
- 메서드 includes()를 사용해서 하면 되나?
- For문을 사용해서 하면 될꺼같기도?

해결
- for문을 굳이 사용하지 않아도 됐었다. 그래서 내가 생각한 방법으로는 filter()를 사용했다.
- filter()를 사용하면서 어떻게 구성을 해야하는 감이 오지 않았다. 그래서 나는 임의로 변수를 하나 주고 delete_list를 부정으로 놓았다.
- 그 이후 부정된 것에 includes()를 사용해서 그 안에 변수 값으로 선언해준 list를 넣어 주었다.
- 이렇게 함으로써 내가 생각한 includes()를 사용함하고, filter도 함께 사용함으로써 문제를 해결할 수 있었다.
- 하지만 filter()를 사용을 할 때 부정을 사용하여 원하는 결과 값을 출력할 수 있다는 것을 알아낼 수 있었다.
*/
