function sleep(milliseconds){
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args){
    // Замедление на половину секунды.
    sleep(0); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  };

function compareArrays(arr1, arr2){
    return arr1.length === arr2.length ? (arr1.every((element, index) => {return element === arr2[index];})) : (false)
};

const mSum = memorize(sum, 5);

mSum(1,2,1);


function memorize(fn, limit){
    const results = [];
    let answer = (...fn) => {
      if (results.find(x => compareArrays(x.args, fn))){
      return results.find(x => compareArrays(x.args, fn)).result
      } else {
      results.push({args: fn, result: sum(...fn)});
      if (results.length > limit){
      results.shift()
      };
      return sum(...fn)
      };
      };
    return answer
};


console.time("timer");

const forTestCase = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];


function testCase(testFunction, someTimer) {
  for (let i = 0; i < 100; i++){
    forTestCase.forEach(element => testFunction(...element));
  };
  console.timeEnd(someTimer);
};

testCase(mSum, "timer");