todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

document.addEventListener('DOMContentLoaded', function() {
	loadContent();
	document.querySelectorAll('span').forEach((removeIcon) => {
	  removeIcon.addEventListener('click', displayModal);
	})
	function loadContent() {
		let list = document.querySelector('ul');
	  todo_items.forEach((todo) => {
		  let item = document.createElement('li');
		  let todoHTML = document.createElement('p');
		  let remove = document.createElement('span');
		  remove.innerHTML = 'X';
		  todoHTML.innerHTML = todo.title;
		  item.className = 'todo';
		  remove.className = 'remove';
		  item.append(todoHTML, remove);
		  list.append(item);
	  });
	};

	function displayModal() {
		let modal = document.createElement('article');
		let confirmation = document.createElement('p');
		let yesButton = document.createElement('a');
		let noButton = document.createElement('a');

		yesButton.innerHTML = 'Yes';
		noButton.innerHTML = 'No';
		modal.innerHTML = '<p>Please confirm you want to delete.</p>'

		// Add class name
		modal.className = 'modal';
		confirmation.className = 'confirmation';
		yesButton.className = 'yes';
		noButton.className = 'no';

		// Add to doc
		modal.append(yesButton, noButton);
		document.body.append(modal);
	}
});