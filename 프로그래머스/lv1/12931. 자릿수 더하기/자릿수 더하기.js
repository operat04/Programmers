function solution(n)
{
    let result = 0;
    let array = String(n).split("");
    return array.reduce((acc,cur)=>acc+Number(cur),0);
}