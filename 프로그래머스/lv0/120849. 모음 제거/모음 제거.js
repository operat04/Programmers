function solution(my_string) {
    let str = ["a","e","i","o","u"];
    let result = my_string;
    for(let i=0; i<str.length; i++){
        result = result.replaceAll(str[i],"");
    }
    return result;
}