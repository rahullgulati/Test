function third(array){
    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++){
            if(array[i]==array[j])
            console.log(array[j]);
        }
    }
    
}


third([1,2,3,3,4,5,6,7,8,9])
