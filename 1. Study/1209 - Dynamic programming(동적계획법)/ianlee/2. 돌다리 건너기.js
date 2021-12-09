function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  // 세칸씩 이동하기 때문에 처음 출발 지점에서 dy[3] 지점까지 한번에 갈 수 있는 시점도 같이 초기화 해줘야 함!!
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1]; // 3칸 까지 갈수 있는 경우의 수
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));