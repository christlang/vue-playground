<script setup lang="ts">
import {onMounted, ref} from 'vue';
const count = ref(0);

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>