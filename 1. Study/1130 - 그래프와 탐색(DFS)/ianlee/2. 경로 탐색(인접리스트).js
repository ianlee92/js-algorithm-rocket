function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  /*
    0: []
    1: []
    2: []
    3: []
    4: []
    5: []
  */
  let ch = Array.from({ length: n + 1 }, () => 0);
  /*
    [0, 0, 0, 0, 0, 0]
  */

  for (let [a, b] of arr) {
    graph[a].push(b); // 인접 리스트
  }
  // console.log(graph)
  /*
    0: []
    1: [2, 3, 4]
    2: [1, 3, 5]
    3: [4]
    4: [2, 5]
    5: []
  */
  function DFS(v) {
    if (v === n) {
      answer++;
      /*
        [1, 2, 3, 4, 5]
        [1, 2, 5]
        [1, 3, 4, 2, 5]
        [1, 3, 4, 5]
        [1, 4, 2, 5]
        [1, 4, 5]
      */
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        // 그래프 행의 길이만큼 for loop
        if (ch[graph[v][i]] === 0) {
          // 체크 유무 따짐
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]); // graph[v][i]는 정점
          ch[graph[v][i]] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

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
console.log(solution(5, arr));
