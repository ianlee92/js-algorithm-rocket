function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0); // 총합구하기
  let n = arr.length; // 6
  function DFS(Level, sum) {
    if (flag) return; // 1이 되었을때 참이므로 stop
    if (Level === n) {
      // 6인덱스가 되었을때 종착점
      if (total - sum === sum) {
        answer = "YES"; // 총합 - 합계 = 합계이면 합이 같은 부분집합이 나온다
        flag = 1; // 답이 발견되면 멈춤
      }
    } else {
      DFS(Level + 1, sum + arr[Level]); // 사용함
      DFS(Level + 1, sum); // 사용안함
    }
  }
  DFS(0, 0); // Level, sum
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
