var subArray = function(originalArray=[], startIndex=0,length=-1){
    if(originalArray == null){
        return null;
    }
    if(length == -1){
        length = originalArray.length;
    }else{
        length = startIndex + length;
    }

    let resultArray = [];

    for(let i = startIndex; i < length; i++){
        resultArray.push(originalArray[i]);
    }
    return resultArray;
}

var replace = function (toArray,fromArray,startIndex=0,length=-1){
  length = length === -1 ? Math.min(toArray.length, fromArray.length) : length;

    for(let i = 0; i < length; i++){

        toArray.splice(startIndex + i , 1,fromArray[i]);
    }
}

export {subArray,replace}