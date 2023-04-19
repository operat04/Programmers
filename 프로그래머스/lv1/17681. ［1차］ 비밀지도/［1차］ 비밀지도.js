function solution(n, arr1, arr2) {
    let result = [];
    const two_arr = (num) =>{
        let temp = [];
        num = num.toString(2);
        temp.push(num)
        while(temp.join("").length<n){
            temp.unshift(0);
        }
        return temp.join("");
    }
    let two_arr1 = arr1.map(el=>two_arr(el));
    let two_arr2 = arr2.map(el=>two_arr(el));
    
    for(let i=0; i<n; i++){
        let str = "";
        for(let j=0; j<n; j++){
            if(two_arr1[i][j] === "0" && two_arr2[i][j] === "0"){
                str += " ";
            }else{
                str += "#";
            }
        }
        result.push(str);
    }
    return result;
}