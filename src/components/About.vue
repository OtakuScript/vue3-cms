<template>
  <div>About Page</div>
  <ol>
    <li
      v-for="(user, index) in userList"
      :key="index"
      @click="toUserDetail(user)"
      :style="{ cursor: 'pointer' }"
    >
      {{ user }}
    </li>
  </ol>
  <router-view></router-view>
  <button @click="bacTokHomePage">Back to Home Page</button>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const userList = ref(["Luffy", "Zoro", "Sanji"])
const router = useRouter()

function toUserDetail(user: string) {
  router.push("/user/" + user)
}

function bacTokHomePage() {
  router.push("/home")
}
</script>

<style scoped></style>
