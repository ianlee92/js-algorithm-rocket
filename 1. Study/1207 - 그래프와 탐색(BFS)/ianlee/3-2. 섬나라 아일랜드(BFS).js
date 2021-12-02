function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  // 이차원 배열 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) { // 1이면 섬
        board[i][j] = 0; // 0으로 바꿔줌(back 방지)
        queue.push([i, j]); // 출발점
        answer++;
        while (queue.length) { // queue 배열이 비면 종료
          let [x, y] = queue.shift(); // x, y로 할당
          console.log(x, y);
          for (let k = 0; k < 8; k++) { // 8방향 탐색
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) { // 섬일때
              board[nx][ny] = 0; // 0으로 바꿔줌
              queue.push([nx, ny]); // 섬도착 시 push해서 while문 돌려 다음 섬 탐색
            }
          }
        }
        console.log("BFS end");
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