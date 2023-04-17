function solution(sizes) {
    sizes = sizes.map(el=>el.sort((a,b)=>b-a));
    let maxwidth = 0;
    let maxheight = 0;
    for(let i=0; i<sizes.length; i++){
        if(maxwidth < sizes[i][0]){
            maxwidth = sizes[i][0];
        }
        if(maxheight < sizes[i][1]){
            maxheight = sizes[i][1];
        }
    }
    return maxwidth * maxheight;
}