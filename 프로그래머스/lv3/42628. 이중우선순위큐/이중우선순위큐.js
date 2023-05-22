function solution(operations) {
    let queue = [];
    operations = operations.map(el=>el.split(" "));
    for(el of operations){
        if(el[0]==="I"){
            queue.push(Number(el[1]));
        }else if(el[0]==="D" && el[1]==='1' && queue.length>0){
            queue.sort((a,b)=>a-b);
            queue.pop();
        }else{
            queue.sort((a,b)=>a-b);
            queue.shift();
        }
    }
    if(queue.length>1){
        return [Math.max(...queue),Math.min(...queue)]
    }else{
        return [0,0];
    }
}