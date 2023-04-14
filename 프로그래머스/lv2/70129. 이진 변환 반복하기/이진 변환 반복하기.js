function solution(s) {
    let remove = 0;
    let count =0;
    while(s !== "1"){
        let prelength = s.length;
        s = s.replaceAll("0","");
        remove += prelength - s.length;
        count +=1
        s = s.length.toString(2);
    }
    return [count , remove]
}