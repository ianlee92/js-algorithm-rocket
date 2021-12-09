//  LIS = 최장 증가 부분 수열 알고리즘
// 원소가 n개인 배열의 일부 원소를 골라내서 만든 부분 수열 중, 각 원소가 이전 원소보다 크다는 조건을 만족하고, 그 길이가 최대인 부분 수열을 최장 증가 부분 수열이라고 합니다.
// LIS문제도 마찬가지로 DP를 사용하는데, DP의 특징 중 하나인 각 단계별로 쪼갠 다음, 이전의 결과를 그대로 사용한다.

let n = 8;
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
 
console.log(solution(n, arr));
 
function solution(n, arr){
  if (n === 1) return 1;
  let dp = Array.from({length: n}, () => 0);
  let answer = 0;
 
  dp[0] = 1; // dp[i] = "i번째 인덱스에서 끝나는 최장 증가 수열의 길이
 
  for (let i=1; i<n; i++){
    let max = 0;
    for (let j=i-1; j>=0; j--){
      if (arr[i] > arr[j] && dp[j] > max) max = dp[j]
    }
    dp[i] = max+1;
    answer = Math.max(answer, dp[i]);
    //console.log("answer:",answer)
    //console.log("dp:",dp)
  }
  return answer;
}


////풀이2
// function solution(n, arr){
//     if (n === 1) return 1;
//     let dp = Array.from({length: n}, () => 0);
    
//     for (let i=0; i<n; i++) {
//         dp[i] = 1;            
//         for (let j=0; j<i; j++) {
//             if (arr[i] > arr[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);    
//             }
//         }
//     }

//     let answer = Math.max(...dp)

//     return answer;
// }
  
