function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // problem score 점수
    let pt = arr[i][1]; // problem time 걸리는 시간
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps); // dy에서 최대값
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}

// [점수, 시간]
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); // 제한시간 20분
