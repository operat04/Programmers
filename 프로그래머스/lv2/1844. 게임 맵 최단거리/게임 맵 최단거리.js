function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const queue = [];
    queue.push([0,0,1]);
    
    while(queue.length){
        const cur = queue.shift();
        if(cur[0]===n-1 && cur[1] === m-1){
            return cur[2];
        }
        for(let i=0; i<4; i++){
            const ny = cur[0] + dy[i];
            const nx = cur[1] + dx[i];
            if(ny>=0 && ny<n && nx>=0 && nx<m && maps[ny][nx]===1){
                queue.push([ny,nx,cur[2]+1])
                maps[ny][nx] = 0;
            }
        }
    }
    return -1;
}