<script setup lang="ts">

import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <div class="content-container">
    <router-view/>
  </div>
</template>

<style scoped>
  .content-container {
    margin: 0 10%;
  }
</style>
