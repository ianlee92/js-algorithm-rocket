function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0; // 0으로 바꿔준다
    for (let k = 0; k < 8; k++) { // 8방향 탐색
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) { // 이동한곳이 섬일때
        console.log(nx, ny); // 섬일때 탐색
        DFS(nx, ny); // 섬일때 재귀탐색
      }
    }
  }

  // 2차원 배열 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) { // 1이면 섬
        answer++;
        console.log(i, j); // 시작점
        DFS(i, j);
        console.log("DFS end");
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));