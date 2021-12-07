console.log(solution());
 
function solution(){
  let queue = [];
  let answer = "";
  queue.push(1);
 
  while (queue.length){
    //console.log("queue :",queue)
    let v = queue.shift();
    //console.log("꺼내지는 노드 :",v)
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]){
      if (nv > 7) break;
      queue.push(nv);
    } 
  }
 
  return answer
}