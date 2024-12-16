<script setup lang="ts">
import ImageGallery from "../components/ImageGallery.vue";

import konceptImg from "../assets/repear/Koncept2.jpg";
import koncept2Img from "../assets/repear/Koncept3.jpg";
import koncept3Img from "../assets/repear/Koncept4.jpg";
import mokradImg from "../assets/repear/mokradčtenar.jpg"
import hristeImg from "../assets/repear/HRISTE2.jpg";
import fotbalImg from "../assets/repear/FOTBAL2.jpg"
import ohnisteImg from "../assets/repear/ohniste2.jpg";
import prochazkaImg from "../assets/repear/PROCHAZKA2.jpg";
import trvalkyImg from "../assets/repear/trvalky.jpg";

import bityska1 from "../assets/tgm/img32.jpg";
import bityska2 from "../assets/tgm/img33.jpg";
import bityska3 from "../assets/tgm/img39.jpg";
import bityska4 from "../assets/tgm/img41.jpg";
import bityska5 from "../assets/tgm/Prefinal-13_pages-to-jpg-0001.jpg";
import bityska6 from "../assets/tgm/Prefinal-14_pages-to-jpg-0001.jpg";
import bityska7 from "../assets/tgm/Prefinal-16_page-0001.jpg";
import bityska8 from "../assets/tgm/Prefinal-17_page-0001.jpg";
import bityska9 from "../assets/tgm/Prefinal-18_page-0001.jpg";
import bityska10 from "../assets/tgm/Prefinal-19_page-0001.jpg";
import bityska11 from "../assets/tgm/Prefinal-20_page-0001.jpg";
import bityska12 from "../assets/tgm/Prefinal-21_page-0001.jpg";

const pearUrls: Array<string> = [
    konceptImg,
    koncept2Img,
    koncept3Img,
    mokradImg,
    hristeImg,
    fotbalImg,
    ohnisteImg,
    prochazkaImg,
    trvalkyImg,];

const bityskaUrls: Array<string> = [
    bityska7,
    bityska8,
    bityska11,
    bityska6,
    bityska1,
    bityska2,
    bityska3,
    bityska4,
    bityska5,
    bityska9,
    bityska10,
    bityska12,];
</script>

<template>
  <div class="container">
    <h1>Projekt Hruška</h1>
    <ImageGallery :items="pearUrls"/>
    <h1>Projekt Veverská Bítýška</h1>
    <ImageGallery :items="bityskaUrls"/>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0 0 0.25rem;
      font-family: var(--headline-font), sans-serif;
      align-self: center;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
</style>