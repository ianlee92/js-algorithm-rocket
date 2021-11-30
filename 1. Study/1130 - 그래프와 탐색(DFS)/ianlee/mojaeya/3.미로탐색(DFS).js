let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0]
  ];

console.log(solution(arr));

function solution(board) {
    let cnt = 0;
    let path = [];
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    function DFS(x, y) {
      if(x === 7 && y === 7) {
          console.log(path)
          cnt++;
      }
      else {
        for(let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if(nx >= 1 && nx <= 7 && ny >= 1 && ny <= 7 && !board[nx][ny]) { 
            board[nx][ny] = 1;
            path.push(`[${nx}][${ny}]`)
            DFS(nx, ny); 
            board[nx][ny] = 0; 
            path.pop();
          }
        }
      }
    }
    board[1][1] = 1;
    DFS(1, 1);
    return cnt;
  }