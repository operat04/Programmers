function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let skipalpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i=0; i<skip.length; i++){
        if(alpha.includes(skip[i])){
           skipalpha = skipalpha.replace(skip[i],'');
        }
    }
    for(let j=0; j<s.length; j++){
        result = result + skipalpha[(skipalpha.indexOf(s[j])+index)%skipalpha.length];
    }
    return result;
}