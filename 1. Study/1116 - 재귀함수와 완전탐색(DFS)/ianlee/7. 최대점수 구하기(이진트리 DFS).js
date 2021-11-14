function solution(m, ps, pt) {
  // 시간 제한
  let answer = 0;
  let n = ps.length;
  function DFS(Level, sum, time) {
    if (time > m) return;
    if (Level === n) {
      answer = Math.max(answer, sum); // 최대점수
    } else {
      DFS(Level + 1, sum + ps[Level], time + pt[Level]); // 문제를푼다
      DFS(Level + 1, sum, time); // 문제를풀지않는다
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7]; // 문제점수
let pt = [5, 12, 8, 3, 4]; // 문제시간
console.log(solution(20, ps, pt));
