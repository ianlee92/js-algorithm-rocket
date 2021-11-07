let arr = [23, 87, 65, 12, 57, 32, 99, 81]

console.log(binarySearch(32, arr))

function binarySearch(M, arr) {
    arr.sort((a, b) => a - b)
    console.log('asc 정렬된 arr :',arr)
    let low = 0
    let high = arr.length -1
    
    while(low <= high) {
        let midIdx = Math.floor((low + high) / 2)
        //console.log("midIdx :",midIdx)
        let mid = arr[midIdx]
        //console.log("mid :", mid)
        if (mid === M) return arr.indexOf(mid) + 1
        else if (mid > M) high =  midIdx - 1
        else low = midIdx + 1
    }
}