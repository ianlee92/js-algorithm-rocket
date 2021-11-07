// 그리디 문제
function solution(arr) {
    arr.sort((a, b) => {
        if(a[1] == b[1]) return a[0] - b[0] // 끝나는 시간이 같으면, 시작하는 시간으로 정렬
        else return a[1] - b[1]
    })

    let endTime = 0  // 끝나는 시간
    let cnt = 0 // 사용할 수 있는 회의수

    //let result = [] // 사용가능 n개 회의 사용표 확인용
    for(let x of arr) {
        if(x[0] >= endTime) {
            cnt++
            endTime = x[1]
            //result.push(x)
        }
    }
    //console.log(result)
    return cnt
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
 
console.log(solution(arr))