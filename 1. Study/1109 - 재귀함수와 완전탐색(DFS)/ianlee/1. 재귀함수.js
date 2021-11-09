// 재귀함수는 자기자신을 호출하고 반복문과 동일하다

function solution(n) {
  function DFS(Level) {
    if (Level == 0) return;
    else {
      console.log(Level); // 3 2 1
      DFS(Level - 1);
      console.log(Level); // 1 2 3
    }
  }
  DFS(n);
}

solution(3);
