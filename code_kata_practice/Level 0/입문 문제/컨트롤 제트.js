/* 
문제
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
문자열에 있는 숫자를 차례대로 더하려고 합니다. 이때
"Z"가 나오면 바로 전에 더했던 숫자를 뺸다는 뜻입니다.
숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 
return 하도록 solution 함수를 완성해보세요.
*/

function solution(s) {
  let arr = s.split(' ');
  let answer = 0;

  arr.forEach((v, i) => {
    if (v === 'Z') answer -= Number(arr[i - 1]);
    else answer += Number(v);
  });
  return answer;
}

// case 2
function solution(s) {
  const stack = [];

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
