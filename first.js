function question0(array){
    let arr = [];
    for (let i = 0; i < 9; i++){
      if (array[i] % 2 === 0){
        arr.push(array[i]);
      }
    }
    console.log(arr);
  }
  question0([1,2,5,4,6,8,4,2,5])
  