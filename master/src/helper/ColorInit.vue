<script setup>
import { onMounted, watch } from "vue";
import { toRef } from "vue";

const props = defineProps({
  color: Boolean,
});

const colorRef = toRef(props, "color");

onMounted(() => {
  if (colorRef.value === true) {
    document.documentElement.classList.add("color-two");
  } else {
    document.documentElement.classList.remove("color-two");
  }
});

watch(colorRef, (newVal) => {
  if (newVal === true) {
    document.documentElement.classList.add("color-two");
  } else {
    document.documentElement.classList.remove("color-two");
  }
});
</script>
