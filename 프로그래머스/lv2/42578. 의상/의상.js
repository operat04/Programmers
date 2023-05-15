// function solution(clothes) {
//     let result = 0;
//     let obj ={};
//     for(let i=0; i<clothes.length; i++){
//         if(obj[clothes[i][1]]=== undefined){
//             obj[clothes[i][1]] = clothes[i][0];
//         }else{
//             obj[clothes[i][1]].push(clothes[i][0]);
//         }
//     }
    
// }
function solution(clothes) {
    let answer = 1;
    const clothesCategory = {}

    clothes.forEach(e => {
        const category = e[1]


        if (clothesCategory[category] === undefined) {
            clothesCategory[category] = [e[0]]
        } else {
            clothesCategory[category].push(e[0])
        }
    })

    for (const [key, value] of Object.entries(clothesCategory)) {
        answer *= (value.length + 1)
    }

    return (answer - 1);
}