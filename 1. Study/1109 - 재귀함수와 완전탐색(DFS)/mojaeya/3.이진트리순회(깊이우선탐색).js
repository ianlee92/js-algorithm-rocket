// 전위순회(Pre-Order)
function solution1(v){
    function preOrder(v){
        if(v > 7) return;
        else {
            console.log(v);
            preOrder(v * 2);  // 왼쪽 자식 노드 실행
            preOrder(v * 2 + 1); // 오른쪽 자식 노드 실행
        }
    }
    preOrder(v);
}
console.log("전위순회 출력 ↓")
solution1(1)


   
// 중위순회(In-Order)
function solution2(v){
    function inOrder(v){
        if(v > 7) return;
        else {
            inOrder(v * 2);
            console.log(v);
            inOrder(v * 2 + 1);
        }
    }
    inOrder(v);
}
console.log("중위순회 출력 ↓")
solution2(1)

   
// 후위순회(Post-Order)
function solution3(v){
    function postOrder(v){
        if(v > 7) return;
        else {
            postOrder(v * 2);
            postOrder(v * 2 + 1);
            console.log(v);
        }
    }
    postOrder(v);
}
console.log("후위순회 출력 ↓")
solution3(1)
