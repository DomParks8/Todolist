var newListItem = document.createElement('li');
		newListItem.innerHTML = "Did I turn the stove off!";
var list = document.querySelector('ul');
		list.appendChild(newListItem);
function newNode (){
	var inputVal = document.getElementById('inputNew').value;
	var newLI = document.createElement('li');
		newLI.innerHTML = inputVal;
var list = document.querySelector('ul');
		list.appendChild(newLI);
}