const bodyElement = document.body;

const titleElement = document.createElement('h1');
titleElement.textContent = "To-Do List";
bodyElement.prepend(titleElement);

const containerElement = document.createElement('div');
containerElement.classList.add('todo-container');
bodyElement.firstChild.after(containerElement);

containerElement.insertAdjacentHTML(
	`afterbegin`,
	`<form class="todo-form">
		<label for="title">Название задачи</label>
		<input
			id="title"
			name="title"
			type="text"
			placeholder="Название задачи"
		/>
		<label for="deadline">Дедлайн</label>
		<input
			id="deadline"
			name="deadline"
			type="date"
		/>
		<label for="responsible">Ответственный</label>
		<input
			id="responsible"
			name="responsible"
			type="text"
			placeholder="Ответственный"
		/>
		<label for="btn"></label>
		<button
			id="btn" 
			type="submit"
		>
			Submit
		</button>
	</form>
	<ul class="task-list"></ul>`
);

const formElement = document.querySelector('.todo-form');
const buttonElement = document.querySelector('button');
const taskListElement = document.querySelector('.task-list');

taskListElement.addEventListener('click', (event) => {
	const targetElement = event.target;
		
	if (targetElement.classList.contains('task-item-checkbox')) {
		const parentTargetElement = targetElement.parentElement;
		parentTargetElement.classList.toggle('completed');
	}
});

formElement.addEventListener('click', (event) => {
	const targetElement = event.target;

	if (targetElement === buttonElement) {
		event.preventDefault();

		const inputElements = document.querySelectorAll('form input');
		for (let i = 0; i < inputElements.length; i++) {
			if (!inputElements[i].value) {
				alert("Все поля должны быть заполнены!");
				return;
			}
		}

		const inputTitleElement = document.querySelector('[name="title"]');
		const inputDeadlineElement = document.querySelector('[name="deadline"]');
		const inputResponsibleElement = document.querySelector('[name="responsible"]');

		const newTask = document.createElement('li');
		newTask.classList.add('task-item');
		newTask.insertAdjacentHTML(
			`afterbegin`,
			`
			<p>${inputTitleElement.value}</p>
			<p>${inputDeadlineElement.value}</p>
			<p>${inputResponsibleElement.value}</p>
			<input class="task-item-checkbox" name="complated" type="checkbox">
		`);
		taskListElement.append(newTask);

		inputTitleElement.value = '';
		inputDeadlineElement.value = '';
		inputResponsibleElement.value = '';
	};
});

