<template>
  <div v-if="active" class="preloader">
    <img src="/assets/images/icon/preloader.gif" alt="Preloader" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const active = ref(true);

onMounted(() => {
  setTimeout(() => {
    active.value = false;
  }, 500);
});
</script>
