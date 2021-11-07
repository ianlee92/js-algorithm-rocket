let M = 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
console.log(solution(M, arr))
 
function solution(M, arr){
    let lt = Math.max(...arr) // 1은 최적의 답과 근접하지 않으므로 제일 큰 값인 9 설정
    let rt = 45 // 한 DVD에 저장할 수 있는 음악 크기
    let result
 
    while (lt <= rt){
        let mid = Math.floor((lt+rt)/2); // 이분검색과 동일
        let dvd = 1   // 1개 DVD로 녹화 시작
        let sum = 0   // 1개 DVD에 저장되는 음악 크기 
        //console.log(`lt = ${lt}, mid = ${mid}, rt = ${rt}`)
 
        for (let x of arr){
            if (sum+x>mid){
                dvd++ // DVD 추가 
                sum = x // 추가된 DVD로 다음곡 녹화 시작
                //console.log("다음곡(",x,")분 => DVD 용량(",mid,")분짜리라 다음곡 짤려! DVD 갈고 갈게요~")
            } else {
                sum += x
                //console.log(x,"=> sum :",sum)
            }
        }
        //console.log("DVD 개수 :",dvd)
        //console.log("===================================")
 
        if (dvd <= M) {
            result = mid // 3개 이하 DVD에 나눠 녹화할 때 DVD 1개의 최적 용량
            rt = mid-1 // 하지만 우리는 DVD 3개에 맞춰 최소용량을 구해야 하기 떄문에 rt를 낮춰 계속 탐색
        }
        else lt = mid+1
    }
    return result
}
