let N = 5
let C = 3
let arr = [1, 2, 4, 8, 9]

console.log(solution(N, C, arr))

function solution(N, C, arr) {
    arr.sort((a, b) => a-b)
    let lt = Math.min(...arr)
    let rt = Math.max(...arr)
    let result

    while(lt <= rt) {
        let mid = Math.floor((lt + rt) / 2) // 가장 가까운 두 말의 최대 거리라고 가정 
        let horse = 1
        let endPoint = arr[0]
        //console.log(`lt = ${lt}, mid = ${mid}, rt = ${rt}`)

        for(let i=1; i<N; i++) {
            if(arr[i]-endPoint >= mid) {
            //console.log("배치할 말 좌표(",arr[i],") -","배치된 말 좌표(",endPoint,") >=",mid, "")
                horse++
                endPoint = arr[i]
            }
        }
        //console.log("배치 가능한 말 :",horse)
        //console.log("================================")

        if(horse >= C) {
            result = mid // 조건에 부합하지만 더 최적의 값을 찾기 위해
            lt = mid + 1 // 거리 늘려서 더 탐색
        } else rt = mid - 1 // 거리를 좁혀서 수직선 상에 말을 더 배치하도록 탐색
    }
    return result
}