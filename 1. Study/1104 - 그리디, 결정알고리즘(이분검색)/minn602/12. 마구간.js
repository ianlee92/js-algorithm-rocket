//?

function count(arr, dist) {
  let cnt = 1,
    first = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - first >= dist) {
      cnt++;
      first = arr[i];
    }
  }

  return cnt;
}

function solution(arr, n) {
  //주어진 배열을 정렬
  arr.sort((a, b) => a - b);

  let minRange = 1;
  let maxRange = arr[arr.length - 1];

  while (minRange <= maxRange) {
    let mid = parseInt((minRange + maxRange) / 2);
    if (count(arr, mid) >= n) {
      answer = mid;
      minRange = mid + 1;
    } else {
      maxRange = mid - 1;
    }
  }

  return answer;
}

solution([1, 2, 8, 4, 9], 3);
