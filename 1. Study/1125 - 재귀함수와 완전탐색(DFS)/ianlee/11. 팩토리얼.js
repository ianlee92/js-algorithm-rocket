function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    // 1일때
    else return n * DFS(n - 1);
    // 5 * D(4)
    // 5 * 4 * D(3)
    // 5 * 4 * 3 * D(2)
    // 5 * 4 * 3 * 2 * 1
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
