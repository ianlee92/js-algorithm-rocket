//  노드와 간선의 정보를 리스트 형태로 표현하는 방법, 연결된 간선만 표시하기 때문에 인접 행렬보다 비교적 간단하다.
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
  let graph = Array.from(Array(n+1), () => Array());
  let visited = Array.from({length: n+1}, () => 0);
  let cnt = 0;
  let path = [];
 
  for (let [a, b] of arr) graph[a].push(b); // 인정 리스트 그래프
 
  function DFS(v){
    if (v === n){
      console.log(path);
      cnt++;
    }else{
      for (let i=0; i<graph[v].length; i++){
        if (!visited[graph[v][i]]){
          visited[graph[v][i]] =1 ;
          path.push(graph[v][i])
          DFS(graph[v][i]);
          visited[graph[v][i]] = 0;
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