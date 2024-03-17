// 가까운 1찾기

/*
문제
정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다.
정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 
1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
*/

const solution = (arr, idx) => arr.indexOf(1, idx);

// -> console.log(solution([1,1,1,1,0], 3)) -> 3
