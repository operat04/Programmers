function solution(num_list) {
    let idx = 0;
    while(idx < num_list.length){
        if(num_list[idx]<0){
            return idx
        }
        idx++
    }
    return -1
}