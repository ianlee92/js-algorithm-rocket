// 그리디

function wedding(arr) {
  let answer = 0;
  let time = [];
  for (let x of arr) {
    time.push([x[0], "s"]); // 시작시간
    time.push([x[1], "e"]); // 끝시간
  }
  console.log("시작, 끝 추가 :" + JSON.stringify(time));

  // charAt()은 인덱스에 해당하는 문자 리턴, charCodeAt()은 유니코드 값 리턴
  time.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    // 시간다르면 시간순 정렬
    else return a[1].charCodeAt() - b[1].charCodeAt(); // 시간같다면 e가 먼저 오게 정렬
  }); // s가 먼저오면 누적 후 차감이 되기 때문에 제대로 된 값을 얻을 수 없다
  // [5,"s"],[12,"s"],[14,"e"],[14,"s"]
  // 1 + 1 - 1 + 1 = 2
  // [5,"s"],[12,"s"],[14,"s"],[14,"e"]
  // 1 + 1 + 1 - 1 = 3

  console.log("시간정렬 뒤 :" + JSON.stringify(time));

  let count = 0;
  for (let x of time) {
    if (x[1] === "s") count++;
    // 시작 +1
    else count--; // 끝 -1
    answer = Math.max(answer, count); // answer와 count 중 최대값 return
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(wedding(arr));
