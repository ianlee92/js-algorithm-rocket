// BFS
let n = 7;
let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];
 
console.log(solution(n, arr));
 
function solution(n, arr){
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 상 하 좌 우, 대각선 좌표까지
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let cnt=0;
  let queue=[];
 
  function bfs(x, y){
    //console.log("bfs(",x,",",y,")")
    arr[x][y] = 0; // 발견한 섬이니 다시 확인 안하려고 0으로
    queue.push([x, y]);
 
    while(queue.length){
      //console.log("queue :",queue)
      let [x, y] = queue.shift();
      //console.log(`x=${x}, y=${y}`)
      for(let i=0; i<8; i++){ // queue 에서 꺼낸 좌표로부터 8방향 탐색 시작
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx >=0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
          arr[nx][ny] = 0;
          queue.push([nx, ny])
        }
      }
    }
  }
 
  for(let x=0; x<n; x++){
    for(let y=0; y<n; y++){
      if (arr[x][y] === 1){  // 섬 발견
        bfs(x, y);
        cnt++;
        //console.log("cnt : ++")
      }
    }
  }
  return cnt;
}
