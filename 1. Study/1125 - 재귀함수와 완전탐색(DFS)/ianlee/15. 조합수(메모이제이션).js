function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(10), () => Array(10).fill(0)); // 행과 열
  console.log(dy);

  function DFS(n, r) {
    // 메모이제이션 이미 구한값을 메모해준다
    if (dy[n][r] > 0) return dy[n][r]; // 이미 구한값을 리턴
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); // 2차원 배열에 저장
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
