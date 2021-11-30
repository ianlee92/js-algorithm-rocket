//인접행렬(adjacency-matrix): 노드와 간선의 정보를 행렬로 표현하는 방법, 간선의 개수와 상관없이 모든 정점을 표현해야 하기 때문에 정점의 개수가 많을수록 메모리 사용량이 늘어난다. 정점의 개수가 10,000개 이상이라면 인접리스트를 사용하자. (인접 행렬은 정점의 개수만큼 반복문을 돌아야 하기 때문에 비효율적이다.) 

let n = 5;
let m = 9;
let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
 
console.log(solution(n, m, arr));
 
function solution(n, m, arr){
  let visited = Array.from({length: n+1});
  let graph = Array.from(Array(n+1), () => Array(n+1).fill(0));
  let path = []
  let cnt = 0;
 
  for (let [a, b] of arr) graph[a][b] = 1;  // 인접 행렬 그래프
console.log(graph)
  function DFS(v){
    if (v === n){
      console.log(path);  // 경로 출력
      cnt++;  // 경로의 가짓 수 출력
    }else{
      for (let i=1; i<=n; i++){
        if (!visited[i] && graph[v][i]){
          visited[i] = 1;
          path.push(i)
          DFS(i);
          visited[i] = 0;
          path.pop()
        }
      }
    }
  }
 
  path.push(1);
  visited[1] = 1;
  DFS(1);
  return cnt;
}