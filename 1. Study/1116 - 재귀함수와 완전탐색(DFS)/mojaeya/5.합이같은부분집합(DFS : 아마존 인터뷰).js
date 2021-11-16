let N = 6
let arr = [1, 3, 5, 6, 7, 10]

console.log(solution(N, arr))

function solution(N, arr) {
    let answer = "NO", flag = 0;
    let total = arr.reduce((a, b) => a + b, 0)  // arr 원소 총합

    function DFS(L, sum) {
      if (flag) return
      if (L === N) {
        if (total - sum === sum) {
          answer = "YES"
          flag = 1; // 문제 조건 성립 즉시, 나머지 재귀 안돌게 stop
        }
      } else { 
        DFS(L + 1, sum + arr[L])
        DFS(L + 1, sum)
      }
    }
    DFS(0, 0)
    return answer
}

// function solution(N, arr) {
//     let answer = "NO", flag = 0;
//     let total = arr.reduce((a, b) => a + b, 0)  // arr 원소 총합

//     function DFS(L, sum) {
//       if (flag) {
//           console.log("pop")
//           return;
//       }
//       if (L === N) {
//         console.log("DFS(",L,") 탐색 종료,",total,"-",sum, "===", sum)
//         if (total - sum === sum) {
//           console.log("YES")
//           answer = "YES";
//           flag = 1;
//         }
//       } else { 
//         console.log("DFS(",L+1,",",sum+arr[L],")") 
//         DFS(L + 1, sum + arr[L]);
//         console.log("DFS(",L,") 이전 주소 복귀")
//         console.log("DFS(",L+1,",",sum,")") 
//         DFS(L + 1, sum);
//       }
//     }
//     DFS(0, 0);
//     return answer;
// }
  
