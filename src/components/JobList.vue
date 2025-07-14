<template>
  <div>
    <h2>All Job Applications</h2>
    <div v-if="store.jobs.length === 0">No jobs added yet.</div>
    <div class="job-card" v-for="job in store.jobs" :key="job.id">
      <h3>{{ job.company }} - {{ job.position }}</h3>
      <p><strong>Status:</strong> {{ job.status }}</p>
      <p><strong>Notes:</strong> {{ job.notes }}</p>
    </div>
  </div>
</template>

<script>
import { useJobStore } from '../stores/jobStore'

export default {
  setup() {
    const store = useJobStore()
    return { store }
  }
}
</script>

<style scoped>
.job-card {
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
}
</style>
