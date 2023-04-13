function solution(bridge_length, weight, truck_weights) {
    let result = 0;
    let bridge = [];
    let sum = 0;
    while(truck_weights.length > 0){
        result ++;
        if(bridge.length === bridge_length){
            sum -= bridge.shift();
        }
        if(sum + truck_weights[0] > weight){
            bridge.push(0);
            continue;
        }
        sum += truck_weights[0];
        bridge.push(truck_weights.shift());
    }
    result += bridge_length
    return result;
}