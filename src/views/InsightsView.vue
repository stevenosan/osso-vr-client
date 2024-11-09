<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
const insights = ref(null)

onBeforeMount(() => {
  console.log('mounted')
  fetch('https://localhost:7082/runs/insights?count=5&order=Desc')
    .then((response) => response.json())
    .then((data) => (insights.value = data))
})
</script>

<template>
  <div class="insights">
    <h1>Runs Count: {{ insights.runsCount }}</h1>
    <!-- <h1>Hello world</h1> -->
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .insights {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
