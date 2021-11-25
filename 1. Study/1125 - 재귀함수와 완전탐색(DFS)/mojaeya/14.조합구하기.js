// 조합은 순열과 다르게 순서를 생각하지 않는다. (1,2) 와 (2,1)을 같은 것으로 본다. 그래서 앞에서 풀었던 중복을 허용하지 않는 순열 방법으로는 못푸는것.

let N = 4 
let M = 2 

console.log(solution(N, M)) 

function solution(N, M) {
    let answer = []
    let tmp = Array.from({length: M}, () => 0)
 
    function DFS(L, S){
        if (L === M) {
            answer.push(tmp.slice())
        } else {  
            for (let i=S; i<=N; i++){
                tmp[L] = i;
                DFS(L+1, i+1)
            }
        }
    }
    DFS(0, 1)
    return answer
}

// function solution(N, M) {
//     let answer = []
//     let tmp = Array.from({length: M}, () => 0)
    
//     function DFS(L, S){
//         console.log("DFS(",L,",",S,")")
//         if (L === M) {
//             console.log("탐색 종료")
//             answer.push(tmp.slice())
//         } else {  
//             for (let i=S; i<=N; i++){
//                 console.log("for loop :",i)
//                 tmp[L] = i
//                 console.log("tmp :", tmp)
//                 DFS(L+1, i+1)
//                 console.log("DFS(",L,",",S,") 이전 주소 복귀")
//             }
//         }
//     }
//     DFS(0, 1)
//     return answer
// }
