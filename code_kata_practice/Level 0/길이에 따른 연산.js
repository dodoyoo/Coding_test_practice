// 길이에 따른 연산

/*
문제
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

제한사항
* 2 ≤ num_list의 길이 ≤ 20
* 1 ≤ num_list의 원소 ≤ 9
* num_list의 원소를 모두 곱했을 때 2,147,483,647를 넘는 입력은 주어지지 않습니다.
*/

function solution(num_list) {
  if (num_list.length >= 11) {
    let sum = 0;
    for (let i = 0; i < num_list.length; i++) {
      sum += num_list[i];
    }
    return sum;
  } else {
    let product = 1;
    for (let i = 0; i < num_list.length; i++) {
      product *= num_list[i];
    }
    return product;
  }
}

/* 
고민 
- 내가 문제를 해석해 본 것을 코드로 옮기기 전 나는 글자로 먼저생각을 했다
    만약 num_list의 길이가 11이상이면 원소의 합을 return하고.
        num_list의 길이가 10이하이면 원소의 곱을 return한다.

- 어떤 조건문을 사용해야할지 생각을 했다. 길이가 나왔으므로 length가 포함이 될것이며
    length를 사용하기 위해서는 어떤 조건문을 사용해야할 지 생각을 했다.
해결
- 나는 if문을 먼저 사용을 한 뒤 그 안에 for문을 사용하는 것으로 생각을 했다.
    그 이유로는 문제를 해석한 것과 같이 먼저 만약이라는 조건이 명시 되어있으며 그 안에서
    반복을 돌려야한다고 생각을 했기 때문이다.
- 그래서 나는 합을 return하는 것을 기준으로 11의 길이를 if문의 조건으로 먼저 명시를 해주었으며
    합을 하기 위해서는 변수를 0으로 설정을 해주었고, 곱을 하기 위해서 변수를 1로 설정해주었다.
*/
