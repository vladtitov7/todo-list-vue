<template>
  <div id="app">
    <h1 class="align-self-center">TODO list application</h1>
     <div class="container">
       <div class="row align-items-center">
      <div class="col">
        <search-task v-bind:tasks="tasks"></search-task>
      </div>
      <div class="col">
        <todo-list v-bind:tasks="tasks"></todo-list>
      </div>
      <div class="col align-self-start">
        <create-task @create-task="createTask"></create-task>
      </div>
     </div>
     </div>

  <!--  <img src="./assets/logo.png"> -->
  <!--  <router-view/> -->
  </div>
</template>

<script>
import sweetalert from 'sweetalert'
import TodoList from './components/TodoList'
import CreateTask from './components/CreateTask'
import SearchTask from './components/SearchTask'

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTask,
    SearchTask
  },
  data () {
    return {
      tasks: [{
        title: 'Example of the task title',
        description: 'Example of the task description',
        status: false
      }]
    }
  },
  methods: {
    createTask (newTask) {
      this.tasks.push(newTask)
      sweetalert('Success!', 'Task created', 'success')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

