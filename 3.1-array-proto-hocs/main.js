function sleep(milliseconds){
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  };
  
  function sum(...args){
      // Замедление на половину секунды.
      sleep(500); // Можно использовать другое значение замедления.
      return args.reduce((sum, arg) => {
        return sum += +arg;
      }, 0);
    };
  
  function compareArrays(arr1, arr2){
      arr1.length === arr2.length ? (arr1.every((element, index) => {return element === arr2[index];})) : ("false, разные значения");
  };
  
  const mSum = memorize(sum, 5);
  
  mSum(3,2,1);
  
  function memorize(fn, limit){
      const results = [
          {args: [3,5,7],result: 15},
          {args: [1,2,3], result: 6}, 
          {args: [3,2,1],result: 6}
      ];
          return function entitled(...fn){
            let checkArgs = new Array();
            results.forEach(it => {checkArgs.push(it.args)});
            console.log(checkArgs);
            console.log(fn);
            fn = Array.from(fn);
            console.log(fn);
            console.log(fn.length);
            console.log(fn.some(item => {compareArrays(item, checkArgs)}));
            };
      };