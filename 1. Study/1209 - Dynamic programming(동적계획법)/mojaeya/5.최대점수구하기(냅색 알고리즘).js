// 최대점수 구하기(DFS) 와 동일한 문제 
// 하지만, 만약에 문제의 개수가 100개 이상이거나 혹은 제한 시간이 많아질수록 재귀의 연산 횟수가 늘어나기 때문에 DFS로 풀 수 없다. 이럴 때는 DP 냅색 알고리즘으로 풀어야 한다

let n = 5;
let m = 20;
let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
 
console.log(solution(n, m, arr));
 
function solution(n, m, arr){
  let dp = Array.from({length: m+1}, ()=> 0);
 
  for (let i of arr){
    //console.log("for loop i:",i)
    let score = i[0];
    let time = i[1];
    for (let j=m; j>=time; j--){
      dp[j] = Math.max(dp[j], dp[j-time]+score);
      //console.log(dp)
    }
  }
  return dp[m];
}