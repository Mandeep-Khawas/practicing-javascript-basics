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