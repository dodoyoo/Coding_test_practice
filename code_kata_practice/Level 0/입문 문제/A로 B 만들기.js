/*
문제
문자열 before과 after가 매개변수로 주어질 때,
before의 순서를 바꾸어 after를 만들 수 있으면 1을,
만들 수 없으면 0을 return 하도록 solution 함수를 완성해 보세요.
*/
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}

// case 2
function solution(before, after) {
  before = before.split('');
  after = after.split('');

  after.filter((v) => {
    if (before.includes(v)) {
      before.splice(before.indexOf(v), 1);
      return true;
    } else {
      return false;
    }
  });

  return before.length === 0 ? 1 : 0;
}
