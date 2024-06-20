<template>
  <div>Home Page</div>
  <button @click="goToAboutPage">Go to About Page</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function goToAboutPage() {
  router.push("/about")
}
</script>

<style scoped less></style>
