//This practice is being done from this website
//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

document.querySelector('#addButton').addEventListener('click',() => {
	let num1 = parseInt(document.querySelector('#firstNumBox').value);
	let num2 = parseInt(document.querySelector('#secondNumBox').value);

	const addition = (num1, num2) => {return num1 + num2;};
	
	const result = addition(num1, num2);

	const resultElement = document.createElement('p');
	resultElement.textContent = `The sum of ${num1} and ${num2} is ${result}.`;
	document.querySelector('#resultBox').innerHTML = '';
	document.querySelector('#resultBox').appendChild(resultElement);
})

document.querySelector("#subtractButton").addEventListener('click', () => {
	const num1 = parseInt(document.querySelector('#firstNumBox').value);
	const num2 = parseInt(document.querySelector('#secondNumBox').value);
	
	const subtraction = (n1, n2) => {return n1 - n2;};
	const subtractResult = subtraction(num1, num2);
	
	const subtractResultElement = document.createElement('p');
	subtractResultElement.textContent = `The difference between ${num1} and ${num2} is ${subtractResult}.`;
	document.querySelector('#resultBox').innerHTML = '';
	document.querySelector('#resultBox').appendChild(subtractResultElement);
})

document.querySelector('#multiplyButton').addEventListener('click', () => {
	const num1 = parseInt(document.querySelector('#firstNumBox').value);
	const num2 = parseInt(document.querySelector('#secondNumBox').value);
	
	const multiplication = (n1, n2) => {return n1 * n2;};
	const multiplyResult = multiplication(num1, num2);
	
	const multiplyResultElement = document.createElement('p');
	multiplyResultElement.textContent = `The product of${num1} and ${num2} is ${multiplyResult}.`;
	document.querySelector('#resultBox').innerHTML = '';
	document.querySelector('#resultBox').appendChild(multiplyResultElement);
});

document.querySelector('#divideButton').addEventListener('click', () => {
	const num1 = parseInt(document.querySelector('#firstNumBox').value);
	const num2 = parseInt(document.querySelector('#secondNumBox').value);
	
	const division = (n1, n2) => {return n1/n2;};
	const divisionResult = division(num1, num2);
	
	const divisionResultElement = document.createElement('p');
	divisionResultElement.textContent = `${num1} divided by ${num2} is ${divisionResult}.`;
	document.querySelector('#resultBox').innerHTML  = "";
	document.querySelector('#resultBox').appendChild(divisionResultElement);
})

//--------FUNCTION TO CHECK WHETHER AN INPUT IS ARRAY OR NOT------------------//
const word1 = 'w3resource';
const numbers1 = [1,2,4,0];
const number2 = 1234;

is_Array = (arg1) => {
	if(toString.call(arg1) === '[object Array]'){
		return true
	}else{ return false }	
}

console.log(is_Array(word1));

const word2 = word1.split('');
console.log(is_Array(word2));
console.log(is_Array(numbers1));
console.log(is_Array(number2));

//----------------CLONING AN ARRAY ------------------//
const array1 = [1,2,4,0];
const array2 = [1,2, [4,0]];

array_Clone = (originalArray) => {
	//Using the spread operator to assign values of one array to another array
	const duplicateArray = [...originalArray];
	
	//const duplicateArray = originalArray.slice(0);
	//const duplicateArray = originalArray.slice();
	
	return duplicateArray;
};

console.log(array_Clone(array1));
console.log(array_Clone(array2));

//Function to get the first element of an array.
let first = (givenArray, n) => {
	let newArray = [];
	
	if(givenArray == null){
		return void 0;
	}else if(n == null){
		return newArray = givenArray[0]
	}else if(n<0){
		return newArray = [];
	}else{
		return newArray = givenArray.slice(0, n);
	}
};

console.log(first([7,9,0,-2]));
console.log(first([],3));
console.log(first([7,9,0,-2], 3));
console.log(first([7,9,0,-2], 6));
console.log(first([7,9,0,-2], -3));

//function to get the last element of an array and passing a parameter 
//'n' will return the last 'n' elements of the array
let last = (input,n) => {
	if(input == null){
		return void 0;
	}else if(input == []){
		return []
	}else if((n==null) || (n<0)){
		return input[input.length - 1];
	}else{
		return input.slice(Math.max(input.length-n, 0));
	}
};

console.log(last([7,9,0,-2]));
console.log(last([7,9,0,-2],3));
console.log(last([7,9,0,-2],6));

//JOin all elements of the array into a string using , and +
const myColor = ["Red","Green","White","Black"];
const myColorComma = myColor.join(',');
const myColorPlus = myColor.join('+');
console.log(myColorComma);
console.log(myColorPlus);
//Check the type of myColorComma to make sure it is string
console.log(typeof(myColorComma));
console.log(typeof(myColorPlus));

//Accept a number as input and insert dashes (-) between each two even numbers
document.querySelector('#addDash').addEventListener('click', () => {
	const userInput = document.querySelector('#checkForEvenInput').value;
	//console.log(userInput);
	
	const userInputArray = userInput.split('');
	const modifiedUserInputArray = userInputArray.map(num => +num);
	//console.log(modifiedUserInputArray);
	
	const result = [modifiedUserInputArray[0]];
	
	for(let i=1;i<modifiedUserInputArray.length;i++){
		if((modifiedUserInputArray[i-1] % 2 === 0) && (modifiedUserInputArray[i] % 2 === 0)){
			result.push('-', modifiedUserInputArray[i]);
		}else{
			result.push(modifiedUserInputArray[i]);
		}
	}
	
	const finalNum = result.join('');

	const displayElement = document.createElement('p');
	displayElement.textContent = `${finalNum}`;
	document.querySelector('#resultBox2').innerHTML = '';
	document.querySelector('#resultBox2').appendChild(displayElement);
	console.log(typeof(userInput));
});

//Sort the items of an array
const unsortedArray1 = [3,8,7,6,5,-4,-3,2,1];

const newSortedArray = unsortedArray1.sort((a,b) => {
	return a-b;
});
console.log(newSortedArray);

//Find the most frequent item of an array
const arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
let mf = 1;
let m = 0;
let item;

let checkForSimilarItem = (arr) => {
	for(let i=0;i<arr.length;i++){
		for(let j=i;j<arr.length;j++){
			if(arr[i] === arr[j]){
				m++
			}else if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
		}
		m=0;
	}
	console.log(`${item} ( ${mf} times ) `) ;
};

checkForSimilarItem(arr1);

//Change the case of the text entered by the user
document.querySelector("#changeCaseButton").addEventListener('click', () => {
	const displayParagraph = document.createElement('p');
	
	const userInput = document.querySelector('#changeCaseInput').value;
	const userInputArray = userInput.split('');
	//console.log(userInputArray);
	
	const duplicateUserInputArray = [...userInputArray];
	const modifiedUserInputArray = duplicateUserInputArray.map((x) => {
		if(x === x.toLowerCase()){
			return x.toUpperCase()
		}else{
			return x.toLowerCase()
		}
	});
	
	//console.log(modifiedUserInputArray);
	const changedUserInputArray = modifiedUserInputArray.join('');
	
	displayParagraph.textContent = changedUserInputArray;
	document.querySelector('#resultBox3').appendChild(displayParagraph);
});

//write a program which prints the elements of the following array
//var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

const printElements = (arra) => {
	for(let i=0;i<arra.length;i++){
		console.log(`"row ${i}"`);
		for(let j=0;j<arra[i].length;j++){
			console.log(`"${arra[i][j]}"`);
		}
	}
};

printElements(a);






















