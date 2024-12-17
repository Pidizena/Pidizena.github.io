<script setup lang="ts">
import Favicon from "./Favicon.vue";
</script>

<template>
  <div class="Navbar">
    <div class="navbar-brand">
      <router-link to="/"><Favicon/></router-link>
    </div>
    <div class="navbar-menu">
      <router-link to="/"> Úvod </router-link>
      <router-link to="/portfolio"> Portfolio</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '../variables';

  .Navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    height: 2rem;
    background-color:  var(--primary-link-color);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    color:  white;
    a:link, a:visited, a:hover, a:active {
      color:  white;
    }

    .navbar-brand {
      margin-left: 0.5rem;
      margin-right: 0.75rem;
      width: 2rem;
      fill: white !important;
    }

    .navbar-menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 0.7rem;

      * {
        margin-left: 0;
        margin-right: 0.5rem;
      }
    }
  }
</style>