function solution(food) {
    let result = '';
    for(let i = 1; i<food.length; i++){
        result = result + String(i).repeat(Math.floor(food[i]/2));
    }
    const result2 = result + "0" + [...result].reverse().join('');
    return result2;
}