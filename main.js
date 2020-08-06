Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true,
		}
	},
	template: `
		<div v-show="isVisible">
			<h1>{{ title }}</h1>

			<button type="button" @click="hideMessage">close</button>

			<p>{{ body }}</p>
		</div>
	`,

	methods: {
		hideMessage() {
			this.isVisible = false;
		}
	}
});


Vue.component('task-list', {

	template: `
		<div>
			<task v-for="task in tasks">{{ task.description }}</task>
		</div>
		`,


	data() {

		return {
			tasks: [
					{description: 'Sample task 1', completed: true},
					{description: 'Sample task 2', completed: false},
					{description: 'Sample task 3', completed: true},
					{description: 'Sample task 4', completed: false},
					{description: 'Sample task 5', completed: true},
					{description: 'Sample task 6', completed: false}
				]
		};
	}

});



Vue.component('task', {

	template: '<li><slot></slot></li>'
});


new Vue({
	el: '#root'
});