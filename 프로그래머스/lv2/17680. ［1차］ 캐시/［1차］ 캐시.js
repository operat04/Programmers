function solution(cacheSize, cities) {
    let result = 0;
    let cityArr = [];
    cities = cities.map(el=>el.toLowerCase());
    
    for(let i=0; i<cities.length; i++){
        let findcity = cityArr.includes(cities[i]);
        
        if(!findcity){
            cityArr.push(cities[i]);
            if(cityArr.length > cacheSize){
                cityArr.shift();
            }
            result +=5;
        }else{
            cityArr = cityArr.filter(el=>el !== cities[i]);
            cityArr.push(cities[i]);
            result +=1;
        }
    }
    return result;
}