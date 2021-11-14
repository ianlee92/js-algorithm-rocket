function solution(c, arr) {
  let answer = 0;
  let n = arr.length;
  function DFS(Level, sum) {
    if (sum > c) return;
    if (Level === n) {
      // 부분집합 완성 (32가지 경우)
      answer = Math.max(answer, sum); // 기존 answer보다 sum이 크면 바꿈
    } else {
      DFS(Level + 1, sum + arr[Level]); // 승차하는경우
      DFS(Level + 1, sum); // 승차안하는경우
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
