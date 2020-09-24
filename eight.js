var obj = {
    "id" : 4, "name" : "abc",
    "id" : 10, "name" : "abc2",
    "id" : 5, "name" : "abc3",
    "id" : 6, "name": "abc5"
   };
   function sortObjectEntries(obj, n){
   
    let sortedList = []
    sortedList = Object.entries(obj).sort((a,b)=>{
          if(b[1] > a[1]) return 1;
          else if(b[1] < a[1]) return -1;
          else {
             if(a[0] > b[0]) return 1;
             else if(a[0] < b[0]) return -1;
             else return 0
      }
     })
      return sortedList.map(el=>el[0]).slice(0,n)
     }
     console.log(obj)  