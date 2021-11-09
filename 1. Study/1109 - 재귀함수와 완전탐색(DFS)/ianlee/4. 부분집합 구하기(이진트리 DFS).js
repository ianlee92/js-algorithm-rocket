// 📚 4. 부분집합 구하기(DFS)
function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0); // n번까지 길이의 배열 생성 [0, 0, 0, 0]
  function DFS(a) {
    // 종착점
    if (a === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim()); // 공집합제거, 띄워쓰기제거
    } else {
      check[a] = 1;
      DFS(a + 1);
      check[a] = 0;
      DFS(a + 1);
    }
  }
  DFS(1); // 1부터 호출, 배열 인덱스 1번부터
  return answer;
}

console.log(solution(3));
