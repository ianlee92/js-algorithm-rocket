let N = 7;
 
console.log(solution(N));
 
function solution(N){
  let d = Array.from({length: N+1}, () => 0);
 
  dp[1] = 1;
  dp[2] = 2;
 
  for (let i=3; i<=N; i++){
    dp[i] = dp[i-2] + dp[i-1];
  }
 
  return dp[N];
}