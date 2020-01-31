// Задача 1

function getSolutions( a, b, c ){
	let D = Math.pow(b, 2) - 4*a*c;
	let answer = {};
	let x1;
	let x2;
	switch(true){
		case D<0:
			answer.D = D;
			return answer
			break;
		case D === 0:
			x1 = -b / 2*a;
			answer.roots = x1; 
			answer.D = D; 
			return answer
			break;
		default:
			x1 = (-b + Math.pow(D, 1/2)) / (2*a);
			x2 = (-b - Math.pow(D, 1/2)) / (2*a);
			answer.roots = [x1, x2];
			answer.D = D;
			return answer
	};
};

function showSolutionsMessage(a, b, c){

	let solution = getSolutions( a, b, c );
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${solution.D}`);

	switch(true){
		case solution.D<0:
		console.log(`Уравнение не имеет вещественных корней`);
		break;
		case solution.D===0:
		console.log(`Уравнение имеет один корень X₁ = ${solution.roots}`);
		break;
		default:
		console.log(`Уравнение имеет два корня. X₁ = ${solution.roots[0]}, X₂ = ${solution.roots[1]}`);
	};
};

showSolutionsMessage(2, 8, 2);

//Задача2


let data = {
	algebra: [2,4,5,2,3,4],
	geometry: [2,4,5],
	russian: [3,3,4,5],
	physics: [5,5],
	music: [2,2,6],
	english: [4,4,3],
	poetry: [5,3,4],
	chemistry: [2],
	french: [4,4]
}

function getAverageScore( data ){

  let averageGrade = 0;
  let totalAverageGrade = 0;

  function getAverageScorePerSubject(marks){
 
  	for (let prop in marks){
    	let gradeSumm = 0;
    	for(let i=0; i<marks[prop].length; i++){
    		let subject = marks[prop];
    		gradeSumm = gradeSumm + subject[i];
    		};
		averageGrade = gradeSumm / marks[prop].length;
  
    	totalAverageGrade= totalAverageGrade + averageGrade;
		marks[prop] = averageGrade;
		};
	return totalAverageGrade	
	};

  let subjectList = Object.getOwnPropertyNames(data);
  data.average = getAverageScorePerSubject(data) / subjectList.length;
  return data
};

getAverageScore( data );

// Задача 3

let secretData = {
	aaa: 1,
	bbb: 1
  };
  
  
  function getPersonData(secretData){
	
	function namesdescriptior(line){
		if (line === 0){
		  return "Родриго"
		} else {
		  return  "Эмильо";
		};
	};
  
	let notSecretData = {
	firstName:namesdescriptior(secretData.aaa),
	lastName:namesdescriptior(secretData.bbb)
	};
	console.log(notSecretData);
  };
  
  getPersonData(secretData);