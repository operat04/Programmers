function solution(s, n) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    let arr = s.split("");
    const isUpper = (str) =>{
        if(str === str.toUpperCase()){
            return true;
        }
        return false;
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i]===" "){
            result.push(arr[i]);
            continue;
        }
        if(isUpper(arr[i])){
            result.push(alpha[(alpha.indexOf(arr[i].toLowerCase())+n)%26].toUpperCase());
        }else{
            result.push(alpha[(alpha.indexOf(arr[i])+n)%26]);
        }
    }
    return result.join("");
}