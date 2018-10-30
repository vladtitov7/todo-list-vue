<template>
  <div>
      <p class="tasks">
          Completed Tasks:
          {{tasks.filter(task => {return task.status === true}).length}}
      </p>
      <p class="tasks">
          Outstanding Tasks:
          {{tasks.filter(task => {return task.status === false}).length}}
      </p>
      <task
        @complete-task="completeTask"
        @delete-task="deleteTask"
        v-for="task in tasks"
        :key="task.id"
        :task.sync="task">
      </task>
  </div>
</template>

<script>
import sweetalert from 'sweetalert'
import Task from './Task'

export default {
  props: ['tasks'],
  components: {
    Task
  },
  methods: {
    deleteTask (task) {
      let taskIndex = this.tasks.indexOf(task)
      this.tasks.splice(taskIndex, 1)
      sweetalert('Deleted!', 'Your task has been deleted!', 'success')
    },
    completeTask (task) {
      const taskIndex = this.tasks.indexOf(task)
      this.tasks[taskIndex].status = true
      sweetalert('Success!', 'Task completed!', 'success')
    }
  }
}
</script>

<style scoped>
p.tasks {
    text-align: center;
}
</style>
