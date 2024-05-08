// 배열 비교하기

/*
문제 
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
* 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
* 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ arr1의 길이 ≤ 100
* 1 ≤ arr2의 길이 ≤ 100
* 1 ≤ arr1의 원소 ≤ 100
* 1 ≤ arr2의 원소 ≤ 100
* 문제에서 정의한 배열의 대소관계가 일반적인 프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.
*/

function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

    if (sum1 > sum2) {
      return 1;
    } else if (sum1 < sum2) {
      return -1;
    } else {
      return 0;
    }
  }
}

/*
고민
- 먼저 arr1과 arr2를 비교해 줘야한다.
- 조건에서 두 배열의 길이가 다르면 배열의 길이가 긴 쪽이 더 크다.
- 배열의 길이가 같다면 원소의 합을 비교해서 더 큰ㄱ쪽이 크고 같으면 같다.
- 대소 관계에 따라 arr2가 크면 -1 arr1이 크면 1, 같으면 0을 return

해결
- arr1과 arr2의 길이를 먼저 비교를 해준다.
- 그후 변수를 새로 설정을 해준뒤 reduce를 사용해서 조건문을 사용해 문제를 풀이해준다.
*/
