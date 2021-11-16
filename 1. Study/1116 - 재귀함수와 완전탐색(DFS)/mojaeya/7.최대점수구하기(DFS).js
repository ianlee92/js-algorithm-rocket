let N = 5 // 문제의 개수
let M = 20 // 제한 시간
let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];

console.log(solution(N, M, arr))

function solution(N, M, arr) {
    let answer = 0
    // let answer = Number.MIN_SAFE_INTEGER
    function DFS(L, score, time) {
        if(time > M) return
        if(L === N) {
            answer = Math.max(answer, score)
        } else {
            DFS(L+1, score + arr[L][0], time + arr[L][1])
            DFS(L+1, score, time)
        }
    }
    DFS(0, 0, 0)
    return answer
}

// function solution(N, M, arr) {
//     let answer = 0
//     // let answer = Number.MIN_SAFE_INTEGER
//     function DFS(L, score, time) {
//         if(time > M) {
//             console.log("제한시간 초과 pop")
//             return
//         } 
//         if(L === N) {
//             console.log("DFS(",L,") 탐색 종료,","answer :",answer, "score :",score)
//             answer = Math.max(answer, score)
//         } else {
//             console.log("DFS(",L+1,",",score + arr[L][0],",",time + arr[L][1],")") 
//             DFS(L+1, score + arr[L][0], time + arr[L][1])
//             console.log("DFS(",L,") 이전 주소 복귀")
//             console.log("DFS(",L+1,",",score,",",time,")") 
//             DFS(L+1, score, time)
//         }
//     }
//     DFS(0, 0, 0)
//     return answer
// }