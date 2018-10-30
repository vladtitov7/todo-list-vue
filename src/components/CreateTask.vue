<template>
<div class="row align-items-start">
  <div class="col align-self-start">
      <button
        type="button"
        class="btn btn-labeled btn-lg"
        @click="openForm"
        v-show="!isCreating">
        Add new task
      </button>
      <div class="card text-center bg-secondary border-success mb-3" v-show="isCreating">
        <div class="card body">
          <div class="content">
                  <div class="card-header font-weight-bold">
                      <label class="font-weight-bold">Title</label>
                  </div>
                  <input v-model="titleText" type="text" class="form-control" placeholder="Enter title">
                  <div class="card-header font-weight-bold">
                      <label class="font-weight-bold">Description</label>
                  </div>
                  <input v-model="descriptionText" type="text" class="form-control" placeholder="Enter description">
                  <div class="btn-group-6 card-footer text-muted">
                      <button
                        class="btn btn-primary"
                        @click="sendForm()">
                        Create
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="closeForm">
                        Cancel
                      </button>
                  </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      titleText: '',
      descriptionText: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.titleText.length > 0 && this.descriptionText.length > 0) {
        const title = this.titleText
        const description = this.descriptionText
        this.$emit('create-task', {
          title,
          description,
          status: false
        })
        this.titleText = ''
        this.descriptionText = ''
        this.isCreating = false
      }
    }
  }
}
</script>
