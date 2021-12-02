function solution() {
  let answer = "";
  let queue = [];
  queue.push(1); // 시작 전 1 노드 추가
  while (queue.length) { // queue 길이 0이면 while문 종료
    console.log(queue);
    let v = queue.shift(); // 가장 앞 node 꺼내기
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) { // 이진트리 검색
      if (nv > 7) continue; // nv가 7보다 크면 push하지 않고 for loop 돈다
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());