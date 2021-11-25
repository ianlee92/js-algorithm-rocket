// 메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법(ex 피보나치 수열)의 핵심이 되는 기술이다.

let n = 5
let r = 3
 
console.log(solution(n, r))
 
function solution(n, r) {
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));  // 35행 35열 2차원 배열
 
  function DFS(n, r){ 
    if (memo[n][r]) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r); // 결과값을 memoization 하기 위해서 memo에 값을 저장.
  }
 
  answer = DFS(n, r);
  return answer
}

//// 크롬 콘솔에서 실행해보기
// function solution(n, r) {
//     let answer;
//     let memo = Array.from(Array(35), () => Array(35).fill(0));  // 35행 35열 2차원 배열
   
//     function DFS(n, r){ 
//         console.log("DFS(",n,",",r,")")
//       if (memo[n][r]) {
//           console.log("memo :", memo)
//           return memo[n][r];
//       }
//       if (n === r || r === 0) {
//           console.log("nCn, nC0 => return 1")
//           return 1;
//       }
//       else return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r); // 결과값을 memoization 하기 위해서 memo에 값을 저장.
//     }
    
   
//     answer = DFS(n, r);
//     return answer
//   }

