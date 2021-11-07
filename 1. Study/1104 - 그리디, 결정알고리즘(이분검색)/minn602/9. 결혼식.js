//사람들이 오고간 시간대로 정렬을 해줘야함

function solution(arr) {
  let timeLine = [],
    count = 0,
    answer = 0;
  for (let i = 0; i < arr.length; i++) {
    timeLine.push([arr[i][0], "arrive"]);
    timeLine.push([arr[i][1], "leave"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  for (let i = 0; i < timeLine.length; i++) {
    if (timeLine[i][1] === "arrive") count++;
    else count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

solution([
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
]);
