function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(Level, sum) {
    if (sum > m) return; // 14에서 16으로 넘어가면 무한 반복됨 방지
    if (Level >= answer) return; // 최소점 이상으로 갈 필요없음 방지
    if (sum === m) {
      console.log(Level, sum);
      answer = Math.min(answer, Level); // 최소점
    } else {
      for (let i = 0; i < n; i++) {
        DFS(Level + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5]; // 동전들
console.log(solution(15, arr));
