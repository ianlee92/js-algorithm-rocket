let N = 7;
 
console.log(solution(N));
 
function solution(N){
  let dp = Array.from({length: N+2}, () => 0);
 
  dp[1] = 1;
  dp[2] = 2;
 
  for (let i=3; i<=N+1; i++){
    dp[i] = dp[i-2] + dp[i-1];
  }
 
  return dp[N+1];
}