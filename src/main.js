// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
*/
const task = (title, status, description) => ({title, status, description})
const log = (text, type, date = new Date()) => ({text, type, date})

const tasks = [
    task('Example Title Task 1', 'completed', 'Example of the description'),
    task('Example Title Task 2', 'outstanding', 'Example of the description')

]

/* eslint-disable no-new */
new Vue({
  el: '#app',

  data: {
    tasks: tasks,
    task: tasks[0],
    logs: [],
    selectedTaskIndex: 0,
    infoVisibility: false,
    search: '',
    titleId: '',
    descriptionId: '',
    modalVisibility: false
},

methods:{
  selectTask(task, index) {
      this.task = task
      this.selectedTaskIndex = index
  },
  cancelDeleting() {
      this.modalVisibility = false
      this.logs.push(
          log(`Canceled deleting: ${this.task.title} - ${this.task.status}`, 'cnl')
      )
  },
  deleteMethod(task) {
      let delId = this.tasks.indexOf(task);

      this.modalVisibility = false
      this.logs.push(
          log(`Deleted: ${this.task.title} - ${this.task.status}`, 'ok')
      )
      console.log(this.tasks.indexOf(task))
      this.tasks.splice(delId, 1)
  },
  addTaskMethod() {
      if (this.titleId !== ''){
      this.tasks.push(
          task(this.titleId, 'outstanding', this.descriptionId)
      )
          this.titleId = ''
          this.descriptionId = ''
      }
      else{
      this.tasks.push(
          task(`Unnamed`, 'outstanding', this.descriptionId)
      )
          this.titleId = ''
          this.descriptionId = ''
      }
  },
},
computed: {

  filteredTasks() {
      return this.tasks.filter(task => {
          return task.title.indexOf(this.search) > -1 || task.description.indexOf(this.search) > -1 || task.status.indexOf(this.search) > -1
      })
  }
},

filters: {
  date(value) {
      return value.toLocaleString()
  }
}

  //router,
  //components: { App },
  //template: '<App/>'
})

