function solution(n, computers) {
    let result = 0;
    let visited = [];
    for(let i=0; i<computers.length; i++){
        if(!visited[i]){
            dfs(i,visited,computers);
            result ++;
        }
    }
    return result;
}
    const dfs = (n,visited,computers) =>{
        visited[n] = true;
        for(let i=0; i<computers.length; i++){
            if(!visited[i] && computers[n][i] === 1){
                dfs(i,visited,computers);
            }
        }
    }