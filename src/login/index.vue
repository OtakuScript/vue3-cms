<template>
  <div>
    <h1>Login Page</h1>
    <label for="username">
      Username:
      <input type="text" id="username" v-model="username" />
    </label>
    <label for="password">
      Password:
      <input type="password" id="password" v-model="password" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const username = ref("")
const password = ref("")
</script>

<style scoped></style>
