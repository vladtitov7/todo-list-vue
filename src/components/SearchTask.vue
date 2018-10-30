<template>
  <div class="col">
    <div class="form-group">
      <label for="search">Find task</label>
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="completed, outstanding"
          v-model="search"
        >
        {{ search }}
    </div>
    <hr>
    <ul class="list-group">
      <li
        v-for="(task, index) in filteredTasks"
        class="list-group-item list-group-item-action pointer"
        @click="selectTask(index)"
        v-bind:class="{'active': selectedTaskIndex === index}"
        :key="task.id"
      >
      {{ task.title }}
     </li>
    </ul>
  </div>
</template>

<script>
import sweetalert from 'sweetalert'
import Task from './Task'

export default {
  props: ['tasks', 'task'],
  data () {
    return {
      search: '',
      selectedTaskIndex: 0
    }
  },
  components: {
    Task
  },
  methods: {
    selectTask (index) {
      sweetalert(`${this.tasks[index].title}`, `${this.tasks[index].description}`, 'success')
    },
    cancelMethod () {
      this.taskVisibility = false
    }
  },
  computed: {
    filteredTasks () {
      return this.tasks.filter(task => {
        return task.title.toString().indexOf(this.search) > -1 || task.description.indexOf(this.search) > -1
      })
    }
  }
}
</script>
