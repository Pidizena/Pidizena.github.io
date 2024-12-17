<script setup lang="ts">
import {defineProps, onMounted, ref} from 'vue';

let imgUrl = ref<string>("");
let imgIndex = 0;
const props = defineProps<{
  items: Array<string>;
}>();

onMounted(() => {
  if (props.items != null && props.items.length > 0) {
    imgUrl.value = props.items[0];
    console.log(props.items);
  }
});

function prevImage() {
  if(props.items == null || props.items.length == 0) {
    return;
  }

  if(imgIndex == 0) {
    imgIndex = props.items.length - 1;
  } else {
    imgIndex--;
  }

  imgUrl.value = props.items[imgIndex];
}

function nextImage() {
  if(props.items == null || props.items.length == 0) {
    return;
  }

  if(imgIndex == props.items.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }

  imgUrl.value = props.items[imgIndex];
}
</script>

<template>
  <div class="gallery-container">
    <button class="arrow left" @click="prevImage">&#8592;</button>
    <img :src="imgUrl" alt="Portofolio" width="70%" />
    <button class="arrow right" @click="nextImage">&#8594;</button>
  </div>
</template>

<style scoped>
  .gallery-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 0 1rem;

    img {
      width: 70%;
    }

    .arrow {
      position: relative;
      top: 50%;
      background-color: var(--primary-btn-color);
      color: white;
      font-size: 2rem;
      border: none;
      padding: 10px;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }
  }
</style>