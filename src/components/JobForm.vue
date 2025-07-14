<template>
  <form @submit.prevent="submitForm" class="job-form">
    <input v-model="job.company" placeholder="Company Name" required />
    <input v-model="job.position" placeholder="Position" required />
    
    <select v-model="job.status">
      <option>Applied</option>
      <option>Interview</option>
      <option>Rejected</option>
    </select>
    
    <textarea v-model="job.notes" placeholder="Notes..."></textarea>
    
    <button type="submit">Add Job</button>
  </form>
</template>

<script>
import { useJobStore } from '../stores/jobStore'

export default {
  data() {
    return {
      job: {
        company: '',
        position: '',
        status: 'Applied',
        notes: ''
      }
    }
  },
  setup() {
    const store = useJobStore()
    return { store }
  },
  methods: {
    submitForm() {
      this.store.addJob({ ...this.job })
      this.job = {
        company: '',
        position: '',
        status: 'Applied',
        notes: ''
      }
    }
  }
}
</script>

<style scoped>
.job-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

input, textarea, select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 12px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2e9c6a;
}
</style>
