import { defineStore } from 'pinia'

export const useJobStore = defineStore('jobStore', {
  state: () => ({
    jobs: []
  }),
  actions: {
    addJob(job) {
      job.id = Date.now() // simple unique ID
      this.jobs.push(job)
    }
  }
})
