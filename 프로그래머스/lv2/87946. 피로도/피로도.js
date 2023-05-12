function solution(k, dungeons) {
    let result = 0;
    let visited = new Array(dungeons.length).fill(0);
    const dfs = (k,count) =>{
        for(let i=0; i<dungeons.length; i++){
            if(k>=dungeons[i][0] && visited[i] === 0){
                visited[i] = 1;
                dfs(k-dungeons[i][1],count+1)
                visited[i] = 0;
            }
        }
        result = Math.max(result,count);
    }
    dfs(k,0)
    return result;
}