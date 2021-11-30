function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  /*
    0: (6) [0, 0, 0, 0, 0, 0]
    1: (6) [0, 0, 0, 0, 0, 0]
    2: (6) [0, 0, 0, 0, 0, 0]
    3: (6) [0, 0, 0, 0, 0, 0]
    4: (6) [0, 0, 0, 0, 0, 0]
    5: (6) [0, 0, 0, 0, 0, 0]
  */
  let ch = Array.from({ length: n + 1 }, () => 0); // check 배열
  // console.log(ch)
  /*
    [0, 0, 0, 0, 0, 0]
  */
  for (let [a, b] of arr) {
    // arr 값 1개 씩 탐색
    // console.log(a, b)
    /*
      1 2
      1 3
      1 4
      2 1
      2 3
      2 5
      3 4
      4 2
      4 5
    */
    graph[a][b] = 1; // 방향 그래프에서 graph arr 에 1로 체크
  }
  //console.log(graph)
  /*           1  2  3  4  5
    0: (6) [0, 0, 0, 0, 0, 0]
    1: (6) [0, 0, 1, 1, 1, 0]
    2: (6) [0, 1, 0, 1, 0, 1]
    3: (6) [0, 0, 0, 0, 1, 0]
    4: (6) [0, 0, 1, 0, 0, 1]
    5: (6) [0, 0, 0, 0, 0, 0]
  */

  function DFS(v) {
    if (v === n) {
      // n 마지막 노드 도착시 answer++
      answer++;
      // console.log(path);
      /*
        [1, 2, 3, 4, 5]
        [1, 2, 5]
        [1, 3, 4, 2, 5]
        [1, 3, 4, 5]
        [1, 4, 2, 5]
        [1, 4, 5]
      */
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          // 1이면 갈수있고, ch가 0이면 간적이 없음
          ch[i] = 1; // 지나갔으면 1로
          DFS(i); // 다음 번호 for loop
          ch[i] = 0; // back전에 다시 0 초기화
        }
      }
    }
  }
  ch[1] = 1; // 출발점 1 (없으면 1로 돌아감)
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
