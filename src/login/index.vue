<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <el-form :model="loginForm" ref="loginForm" label-width="auto" style="max-width: 600px">
      <el-form-item label="userName">
        <el-input v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="loginForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const loginForm = ref({
  userName: "",
  password: ""
})
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
