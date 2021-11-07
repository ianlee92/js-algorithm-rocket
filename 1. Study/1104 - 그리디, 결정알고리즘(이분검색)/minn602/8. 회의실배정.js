// 그리디 알고리즘(욕심쟁이 알고리즘) -> 각 단계에서 최선의 방법을 선택하는 기법

//회의 끝나는 시간이 작은 순으로 정렬
//다음 회의시작시간이 이전 회의시간의 끝나는 시간보다 크거나 같은지 비교

function solution(arr) {
  let answer = 0,
    endTime = 0;

  arr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= endTime) {
      answer++;
      endTime = arr[i][1];
    }
  }
  return answer;
}

solution([
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
]);
