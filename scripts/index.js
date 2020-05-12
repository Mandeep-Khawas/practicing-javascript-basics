document.querySelector('#addButton').addEventListener('click',() => {
	let num1 = parseInt(document.querySelector('#firstNumBox').value);
	let num2 = parseInt(document.querySelector('#secondNumBox').value);

	const addition = (num1, num2) => {return num1 + num2;};
	
	const result = addition(num1, num2);

	const resultElement = document.createElement('p');
	resultElement.textContent = `The sum of ${num1} and ${num2} is ${result}.`;
	document.querySelector('#resultBox').appendChild(resultElement);
})