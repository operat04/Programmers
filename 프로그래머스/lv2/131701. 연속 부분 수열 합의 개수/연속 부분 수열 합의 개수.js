function solution(elements) {
    let result = 0;
    const circle = elements.concat(elements);
    const set = new Set();
    for(let i=1; i<elements.length; i++){
        for(let j=0; j<elements.length; j++){
            let sum = circle.slice(j,j+i).reduce((acc,cur)=>acc+cur,0);
            set.add(sum);
        }
    }
    result = set.size +1
    return result;
}