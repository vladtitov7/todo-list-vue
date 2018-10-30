<template>
   <div class="h-10 card text-center bg-secondary border-success mb-3">
      <div class="card body">
       <div class="content" v-show="!isEditing">
           <div class="card-header font-weight-bold">
               {{ task.title }}
           </div>
           <p class="h-80 card-text font-italic">
               {{ task.description }}
           </p>
           <a href="#"
               class="btn-group-6" role="group" aria-label="Basic example">
                  <button
                   type="button"
                   class="btn btn-primary btn-sm"
                   @click="showForm">
                   Edit
                  </button>
                  <button
                   type="button"
                   class="btn btn-danger btn-sm"
                   @click="deleteTask(task)">
                   Delete
                  </button>
            </a>
       </div>
       <div class="content" v-show="isEditing">
           <form>
               <div class="form-group">
                   <label class="font-weight-bold">Title</label>
                   <input v-model="task.title" type="text">
               </div>
               <div class="form-group">
                   <label class="font-weight-bold">Description</label>
                   <input v-model="task.description" type="text">
               </div>
                   <button
                    class="btn btn-primary btn-block"
                    @click="hideForm">
                    Close
                   </button>
           </form>
       </div>
       <div
        class="h-10 card-footer text-muted font-weight-bold"
        v-show="!isEditing && task.status" disable>
        Completed!
       </div>
       <div class="h-10 card-footer text-muted">
         <button
          type="button"
          class="btn btn-outline-warning btn-sm"
          @click="completeTask(task)"
          v-show="!isEditing && !task.status">
          Outstanding
         </button>
       </div>
      </div>
</div>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    completeTask (task) {
      this.$emit('complete-task', task)
    },
    deleteTask (task) {
      this.$emit('delete-task', task)
    },
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    }
  }
}
</script>
