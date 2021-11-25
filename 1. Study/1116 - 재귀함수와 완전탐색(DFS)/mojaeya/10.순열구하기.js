let N = 3 // 주어진 자연수 개수
let M = 2 // 뽑는 개수
let arr = [3, 6, 9] // 주어진 자연수

console.log(solution(N, M, arr)) 

// function solution(N, M, arr) {
//     let answer = []
//     let check = Array.from({ length: N }, () => 0) // [0,0,0]
//     let tmp = Array.from({ length: M }, () => 0) // [0,0]

//     function DFS(L) {
//       if (L === M) {
//         answer.push(tmp.slice());
//       } else {
//         for (let i = 0; i < N; i++) {
//           if (check[i] === 0) { // 이게 1이면 그 해당 인덱스의 arr 숫자가 쓰인것.
//             check[i] = 1;  // 노드 방문 체크
//             tmp[L] = arr[i]; 
//             DFS(L + 1);
//             check[i] = 0; // 노드 방문 후 돌아갈 때 리셋
//           }
//         }
//       }
//     }
//     DFS(0);
//     return answer;
// }

function solution(N, M, arr) {
    let answer = []
    let check = Array.from({ length: N }, () => 0) // [0,0,0]
    let tmp = Array.from({ length: M }, () => 0) // [0,0]

    function DFS(L) {
      if (L === M) {
        console.log("DFS(",L,") 탐색 종료")
        answer.push(tmp.slice());
      } else {
        for (let i = 0; i < N; i++) {
            console.log("DFS(",L,")")
            console.log("for loop :",i)
          if (check[i] === 0) {
            console.log("before check :", check)
            check[i] = 1;
            console.log("after check :", check)
            tmp[L] = arr[i];
            console.log("tmp :", tmp)
            DFS(L + 1);
            console.log("DFS(",L,") 이전 주소 복귀, for loop :",i)
            check[i] = 0;
            console.log("reset check :", check)
          }
        }
      }
    }
    DFS(0);
    return answer;
}
