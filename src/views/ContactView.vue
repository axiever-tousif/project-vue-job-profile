<template>
  <div style="background-color: #5370b5; min-height: 100vh; padding: 60px 20px; color: white; font-family: sans-serif;">
    <h2 style="text-align: center; font-size: 32px; font-weight: bold; margin-top: 60px;">
      Contact <span style="color: #00f9ff;">Me!</span>
    </h2>

    <form ref="form" @submit.prevent="sendEmail" style="max-width: 700px; margin: 40px auto 0;">
      <!-- Row 1 -->
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <input name="user_name"
          type="text"
          placeholder="Full Name"
          required
          style="flex: 1; padding: 12px; background-color: #cadae9; border: none; border-radius: 6px; color: black;"
        />
        <input name="user_email"
          type="email"
          placeholder="Email Address"
          required
          style="flex: 1; padding: 12px; background-color: #cadae9; border: none; border-radius: 6px; color: black;"
        />
      </div>

      <!-- Row 2 -->
      <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <input
          type="text"
          placeholder="Mobile Number"
          required
          style="flex: 1; padding: 12px; background-color: #cadae9; border: none; border-radius: 6px; color: black;"
        />
        <input
          type="text"
          placeholder="Email Subject"
          required
          style="flex: 1; padding: 12px; background-color: #cadae9; border: none; border-radius: 6px; color: black;"
        />
      </div>

      <!-- Message -->
      <div style="margin-bottom: 30px;">
        <textarea name="message"
          placeholder="Your Message"
          required
          rows="6"
          style="width: 100%; padding: 12px; background-color: #cadae9; border: none; border-radius: 6px; color: black; resize: none;"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div style="text-align: center;">
        <button
          type="submit"
          style="background-color: #00f9ff; color: #1a1a2e; padding: 12px 30px; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; box-shadow: 0 0 20px #00f9ff; transition: 0.3s;"
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref(null)

const sendEmail = () => {
  emailjs
    .sendForm(
      'service_wqktb75',
      'template_oqviuqx',
      form.value,
      'EGA0AFe75vpWUOaIX'
    )
    .then(
      () => alert('Message sent successfully!'),
      (error) => alert('Error sending message: ' + error.text)
    )
}
</script>

