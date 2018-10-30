<template>
  <div class="col">
    <div class="form-group">
      <label for="search">Find task</label>
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="type title or description"
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
      search: ''
    }
  },
  components: {
    Task
  },
  methods: {
    selectTask (index) {
      sweetalert(`${this.tasks[index].title}`, `${this.tasks[index].description}`, `${this.tasks[index].status === true ? `success` : `error`}`)
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
