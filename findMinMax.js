exports.findMinMax = (myArray)=>{
    let newArray = [];
    let maximum = myArray.reduce(function(firstNo,secondNo){
       if( firstNo > secondNo){
           return firstNo;
       }
        else{
           return secondNo;
       }

    });
    newArray.push(maximum);

    let minimum = myArray.reduce(function(firstNo,secondNo){
        if( firstNo < secondNo){
            return firstNo;
        }
        else{
            return secondNo;
        }

    });
    newArray.unshift(minimum);
    if(minimum === maximum){
        return [minimum];
    }

    return newArray;

};