function solution(arr, n) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i + 1;
  }
}

solution([23, 87, 65, 12, 57, 32, 99, 81], 32);
