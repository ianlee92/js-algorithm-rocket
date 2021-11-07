function solution(arr) {
    let result = arr
    arr.sort((a, b) => {
      // console.log("a : ",a, ' b : ',b)
      if (a[0] === b[0]) return a[1] - b[1] // x값이 같을 경우 y값에 의해 정렬
      else return a[0] - b[0] // 먼저 x값의 의해서 정렬
    })
    return result
  }
let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6]
  ]

console.log(solution(arr))