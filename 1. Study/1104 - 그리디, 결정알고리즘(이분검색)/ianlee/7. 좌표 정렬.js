function coordinate(arr) {
  let answer = arr; // arr 얕은 복사
  arr.sort((a, b)=>{
    if(a[0]!==b[0]) return a[0] - b[0]; // 0번째 인덱스끼리 다르면 x축끼리 비교해서 오름차순
    else return a[1] - b[1]; // 0번째 인덱스끼리 같으면 y축끼리 비교해서 오름차순
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [2, 2],
  [2, 5],
  [3, 6],
];

console.log(JSON.stringify(coordinate(arr)));
