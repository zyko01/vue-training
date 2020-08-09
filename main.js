window.Event = new class {
	contructor() {
		this.vue = new Vue();
	}

	fire(event, data = null) {
		this.vue.$emit(event, data);
	}

	listen(event, callback) {
		this.vue.$on(event, callback);
	}
}

Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			
			Event.fire('applied');
		}
	}
});

new Vue({
	el: '#root',

	data: {

		couponApplied:false
	},

	created() {
		Event.listen('applied', () => alert('Handling it'));
	}
});


// Vue.component('tabs', {
// 	template: `
// 		<div>
// 			<div class="tabs">
// 			  <ul>
// 			   	<li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">

// 			   		<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>

// 			   	</li>
// 			  </ul>
// 			</div>

// 			<div class="tab-details">
// 				<slot></slot
// 			</div>
// 		</div>
// 	`,

// 	data() {
// 		return {tabs: []};
// 	},

// 	created() {
// 		this.tabs = this.$children;
// 	},

// 	methods: {
// 		selectTab(selectedTab) {
// 			this.tabs.forEach(tab => {
// 				tab.isActive = ( tab.name == selectedTab.name );
// 			});
// 		}
// 	}
// });

// Vue.component('tab', {
// 	template: `
// 		<div v-show="isActive"><slot></slot></div>
// 	`,

// 	props: {
// 		name: {required: true},

// 		selected: {default: false}
// 	},


// 	data() {
// 		return {
// 			isActive: false
// 		}
// 	},

// 	computed: {
// 		href() {
// 			return '#' + this.name.toLowerCase().replace(/ /g, '-');
// 		}
// 	},

// 	mounted() {
// 		this.isActive = this.selected;
// 	}

// });


// Vue.component('modal', {
// 	template: `
// 		<!-- Modal -->
// 		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// 		  <div class="modal-dialog" role="document">
// 		    <div class="modal-content">
// 		      <div class="modal-header">
// 		        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
// 		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// 		          <span aria-hidden="true">&times;</span>
// 		        </button>
// 		      </div>
// 		      <div class="modal-body">
// 		        ...
// 		      </div>
// 		      <div class="modal-footer">
// 		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
// 		        <button type="button" class="btn btn-primary">Save changes</button>
// 		      </div>
// 		    </div>
// 		  </div>
// 		</div>
// 	`
// });

// Vue.component('message', {
// 	props: ['title', 'body'],
// 	data() {
// 		return {
// 			isVisible: true,
// 		}
// 	},
// 	template: `
// 		<div v-show="isVisible">
// 			<h1>{{ title }}</h1>

// 			<button type="button" @click="hideMessage">close</button>

// 			<p>{{ body }}</p>
// 		</div>
// 	`,

// 	methods: {
// 		hideMessage() {
// 			this.isVisible = false;
// 		}
// 	}
// });


// Vue.component('task-list', {

// 	template: `
// 		<div>
// 			<task v-for="task in tasks">{{ task.description }}</task>
// 		</div>
// 		`,


// 	data() {

// 		return {
// 			tasks: [
// 					{description: 'Sample task 1', completed: true},
// 					{description: 'Sample task 2', completed: false},
// 					{description: 'Sample task 3', completed: true},
// 					{description: 'Sample task 4', completed: false},
// 					{description: 'Sample task 5', completed: true},
// 					{description: 'Sample task 6', completed: false}
// 				]
// 		};
// 	}

// });



// Vue.component('task', {

// 	template: '<li><slot></slot></li>'
// });


