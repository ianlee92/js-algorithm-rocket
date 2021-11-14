function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 유사배열객체
  function DFS(Level) {
    if (Level === m) {
      // 9번
      answer.push(tmp.slice()); // slice() 깊은복사 새로운 배열 반환
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[Level] = i;
        DFS(Level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2)); // n 3=> 1,2,3 / m 2 => (0, 1)
