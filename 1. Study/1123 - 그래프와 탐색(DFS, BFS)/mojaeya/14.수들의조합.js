// 1. N개의 정수 중 K개를 뽑는 모든 경우의 수(조합) 구하기
// 2. 조합의 합을 M으로 나눴을 때 0인 값을 찾으면 정답.

let N = 5
let K = 3
let arr = [2, 4, 5, 8, 12]
let M = 6

console.log(solution(N, K, arr, M))

function solution(N, K, arr, M) {
    let cnt = 0;
    function DFS(L, S, sum){
        if (L === K) {
            if(sum % M === 0) cnt++
        } else {
            for(let i=S; i<N; i++) {
                DFS(L+1, i+1, sum+arr[i]);
            }
        }
    }
    DFS(0, 0, 0);
    return cnt;
}

// function solution(N, K, arr, M) {
//     let cnt = 0;
//     let tmp = Array.from({length: K}, () => 0); // 조합 확인용 배열
//     function DFS(L, S, sum){
//         console.log("DFS(",L,",",S,",",sum,")")
//         if (L === K ) { 
//             console.log("탐색 종료",tmp, "합 :",sum)
//             if(sum % M === 0) {
//                 console.log("====== M 의 배수 ====== cnt++")
//                 cnt++
//             }
//         } else {
//             for(let i=S; i<N; i++) {
//                 console.log("for loop :",i)
//                 tmp[L] = arr[i]  // 조합 확인용 
//                 console.log("tmp :", tmp)
//                 DFS(L+1, i+1, sum+arr[i])
//                 console.log("DFS(",L,",",S,",",sum,") 이전 주소 복귀")
//             }
//         }
//     }
//     DFS(0, 0, 0);
//     return cnt;
// }