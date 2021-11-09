function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      // 전위순회 출력 answer += v + " ";
      DFS(v * 2);
      // 중위순회 출력 answer += v + " ";
      DFS(v * 2 + 1);
      // 후위순회 출력 answer += v + " ";
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
