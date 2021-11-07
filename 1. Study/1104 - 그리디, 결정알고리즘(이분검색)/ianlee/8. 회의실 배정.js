/*
그리디(Greedy) 알고리즘은 '당장 눈 앞에 보이는 최적의 상황만을 쫓는 알고리즘'으로 가장 단순한 형태의 알고리즘이다.
항상 최적의 결과를 도출하는 것은 아니지만 어느 정도 최적의 해에 근사한 값을 빠르게 구할 수 있다는 장점이 있다.
기본적으로 무조건 큰 경우대로, 무조건 작은 경우대로 등으로 극단적으로 문제에 접근한다는 점에서 정렬(Sort) 기법이 함게 사용되는 경우가 많다.
*/

function meetingRoom(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    // 끝나는 시간이 같으면 시작 시간 오름차순
    else return a[1] - b[1]; // 끝나는 시간이 다르면 끝나는 시간 오름차순
  });
  console.log("좌표정렬: " + JSON.stringify(arr));

  let end = 0; // 끝나는 시간

  for (let x of arr) {
    console.log(x);
    if (x[0] >= end) {
      // 첫번째 회의 시작 시간 >= 끝나는 시간보다 클경우
      answer++; // 회의 가능 숫자 + 1 추가
      end = x[1]; // 첫번째 회의가 끝나는 시간이 end가 됨
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

console.log(meetingRoom(arr));
