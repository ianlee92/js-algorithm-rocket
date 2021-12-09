// 동적계획법 Dynamic Programming은 큰 문제가 있다고 가정했을 때 한번에 풀기에 어렵기때문에 작은 단위로 쪼개서
// 직관적인 단위로 생각해보고 작은 단위에서 답이 나오면 문제의 범위를 점차 증가시켜서 문제를 해결하는 방법이다.
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0); // dynamic arr 생성 (길이는 n 까지니까 n + 1 , 모두 일단 0으로 초기화 시켜 줌)
  dy[1] = 1; // 직관적으로 알수 있는 부분은 값을 넣어 줌
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // 관계 식을 만들어서 사용하면 쉽게 구할 수 있음
  }
  // 관계식 dy[n] = dy[n-2] + dy[n-1]
  answer = dy[n];
  return answer;
}

console.log(solution(7));
