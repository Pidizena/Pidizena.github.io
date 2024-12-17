<script setup lang="ts">
  import Logo from '../components/Logo.vue'
</script>

<template>
  <div class="home-content">
    <Logo/>
    <p class="article-title"> Ateliér krajinářské a zahradní architektury. </p>
    <div class="home-article">
      <img src="../assets/cernotin/POHLEDCELEK.jpg" alt="image" />
      <p class="article-content">
        Jsme ateliér zaměřující se na tvorbu v oblasti krajinářské a zahradní architektury. Pracujeme v měřítku volné krajiny, veřejného prostoru městské krajiny až po menší prostory zahradního umění.

        Můžeme nabídnout projektování, profesionální a zodpovědný přístup. Poskytujeme i poradenství v těchto okruzích i v urbanismu měst.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .home-content{
    display: flex;
    flex-direction: column;

    .article-title {
      margin: 0 0 0.25rem;
      font-family: var(--headline-font), sans-serif;
      align-self: center;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
    }

    .home-article {
      width: auto;
      margin: 0 5%;

      img {
        width: 100%;
      }

      p {
        align-self: center;
        margin: 0 0 2rem;
        font-size: 0.8rem;
      }
    }
  }
</style>