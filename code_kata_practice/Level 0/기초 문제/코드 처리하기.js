// 코드 처리하기

/*
문제
문자열 code가 주어집니다.
code를 앞에서부터 읽으면서 만약 문자가 “1”이면 mode를 바꿉니다.
mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

mode는 0과 1이 있으며, idx를 0부터 code의 길이 -1 까지 1씩 키워가면서 
code[idx]의 값에 따라 다음과 같이 행동합니다.

* mode가 0일 때
    * code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
    * code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.

* mode가 1일 때
    * code[idx]가 “1”이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
    * code[idx]가 “1”이면 mode를 1에서 0으로 바꿉니다.

문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 “EMPTY”를 return합니다.
*/

function solution(code) {
  var ret = '';
  var mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      code[i] == '1' ? (mode = 1) : i % 2 == 0 && (ret += code[i]);
    } else {
      code[i] == '1' ? (mode = 0) : i % 2 != 0 && (ret += code[i]);
    }
  }
  return ret.length > 0 ? ret : 'EMPTY';
}

/*
  고민
  1을 만났을 때 mode가 변경이 된다. -> mode가 0으로 시작이 되고 1을 만나면 1로 다시 1을 만나면 0으로 변경
  
  인덱스에서 1을 만난다 -> mode변경
  
  mode변경 후 mode에 따라서 i가 짝수 홀수인지 판별 하여 인덱스를 추가
  
  
  
  결국엔 
  - 만약 mode가 0이면 짝수일 때 인덱스에 추가 -> 그 후 1을 만나면 mode를 변경해준다.
  */
