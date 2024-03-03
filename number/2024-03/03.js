// 순서 바꾸기

/*
문제
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
  const before = num_list.slice(0, n);
  const after = num_list.slice(n);

  return after.concat(before);
}

/*
고민
- n번째 이후의 숫자가 나오고 그 이후 배열 0부터 다시 나와야한다.
- 그렇다면 startsWith을 사용해주면 될까?
- 반복문?, length? 

해결
- 나는 startsWith을 사용하려고 했는데 이 메서드는 틀린거라고 나왔다.
- 그래서 나는 slice()를 사용해서 문제를 풀려고했다.
- slice를 사용해서 0부터 n까지로 만들어서 배열이 출력하도록 나오도록 했다.
- n을 통해서 n의 전 부터의 수와 후의 수까지로 해서 두가지의 배열을 만들어 주었다.
- 그 이후 배열을 연결을 해줘서 배열이 출력할 수 있도록 해주었다.
*/
