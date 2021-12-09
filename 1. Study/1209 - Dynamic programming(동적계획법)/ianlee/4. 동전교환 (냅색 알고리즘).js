function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0; // 0은 동전이 없기 때문에 0으로 초기화
  for (let i = 0; i < coin.length; i++) {
    // coin의 길이 만큼 i for 문 시작
    for (let j = coin[i]; j <= m; j++) {
      // dy arr에 각 코인으로 들어 오는 수 만큼
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1); // dy arr 에서 최소값을 구함
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
