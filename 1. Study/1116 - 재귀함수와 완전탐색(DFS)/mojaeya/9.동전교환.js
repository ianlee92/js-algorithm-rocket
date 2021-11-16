let N = 3 // 동전의 종류 개수 
let coin = [1, 2, 5] // 동전의 종류
let M = 15 // 거슬러 줄 금액 

console.log(solution(N, coin, M))

function solution(N, coin, M) {
    let answer = Number.MAX_SAFE_INTEGER
    //coin.sort((a, b) => b - a); => 더 효율성!
    function DFS(L, sum) {
        if(sum > M) return // 거슬러줄 금액보다 크기 때문
        if(answer <= L) {
            return // answer보다 작은 값을 구해야하기 때문
        }
        if(sum === M) {
            answer = Math.min(answer, L)
        } else {
            for(let i=0; i<N; i++) {
                DFS(L+1, sum + coin[i])
            }
        }
    }
    DFS(0, 0)
    return answer
}

// function solution(N, coin, M) {
//     let answer = Number.MAX_SAFE_INTEGER
//     coin.sort((a, b) => b - a);
//     function DFS(L, sum) {
//         if(sum > M) {
//             console.log("sum > M !!!pop!!!")
//             return
//         }
//         if(answer <= L) {
//             console.log("answer <= L !!!pop!!!")
//             return 
//         }
//         if(sum === M) {
//             console.log("DFS(",L,") 탐색 종료,","answer :",answer, "L :",L)
//             answer = Math.min(answer, L)
//         } else {
//             for(let i=0; i<N; i++) {
//                 console.log("DFS(",L+1,",",sum+coin[i],")")
//                 DFS(L+1, sum + coin[i])
//                 console.log("DFS(",L,") 이전 주소 복귀, for loop :",i+1)
//             }
//         }
//     }
//     DFS(0, 0)
//     return answer
// }

