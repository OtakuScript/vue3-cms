<template>
  <div class="page">
    <strong>Current route path:</strong> {{ $route.fullPath }}
    <nav>
      <RouterLink to="/home">Home</RouterLink>&nbsp;&nbsp;
      <RouterLink to="/about">About</RouterLink>&nbsp;&nbsp;
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
