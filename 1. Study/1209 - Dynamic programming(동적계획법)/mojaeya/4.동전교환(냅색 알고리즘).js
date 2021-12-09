//동전의 종류가 100개 이상, 거스름 돈이 100,000 이상일 경우 DFS로 풀 수 없다. 이럴 때는 DP에서 냅색 알고리즘으로 풀어야 한다.

let n = 3;
let coin = [1, 2, 5];
let m = 15;
 
console.log(solution(n, coin, m));
 
function solution(n, coin, m){
  let dp = Array.from({length: m+1}, () => 1000);
  dp[0] = 0;  
 
  for (let i=0; i<n; i++){
      console.log("for loop i:",i)
    for (let j=coin[i]; j<=m; j++){
      dp[j] = Math.min(dp[j], dp[j-coin[i]]+1);
      //console.log(dp)
    }
  }
  return dp[m];
}
