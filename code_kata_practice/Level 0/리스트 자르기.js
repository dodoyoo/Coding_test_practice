// 리스트 자르기

/*
문제
정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수  여러 개가 담긴 리스트 num_list가 주어집니다.
slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, 
n에 따라 다음과 같이 num_list를 슬리이싱하려고 합니다.

* n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
* n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
* n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
* n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로

올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  } else if (n === 2) {
    return num_list.slice(a);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);
  } else if (n === 4) {
    let answer = [];
    for (let i = a; i <= b; i += c) {
      answer.push(num_list[i]);
    }
    return answer;
  }
}

/*
고민
- slice() 메서드를 사용해서 범위를 적용을 해줘야한다.
- 하나씩 뽑아서 쓰는게 아니리니까 n에 따라서 설정 범위가 달라져야한다.
- slicer의 구문을 설정을 해주고 
- 그거에 따라서 num_list의 숫자를 출력해줘야한다.

해결
- 조건문을 사용해서 하나씩 조건을 달아주었다.
- 조건은 문제에 나온것과 같이 조건을 달아주었다.
- 마지막 n이 4일때 반복문을 사용해주었으며 반복문을 설정할때 a,b,c에 맞추어서 설정을 해줘서 풀이를 하였다.
*/
