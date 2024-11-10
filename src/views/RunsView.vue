<script setup lang="ts">
import { onMounted } from 'vue'
import { useRunsStore } from '@/stores/runs'

const runsStore = useRunsStore()

onMounted(() => {
  runsStore.fetchData()
})
</script>

<template>
  <div class="runs">
    <span> Hello world</span>
    <v-list lines="one">
      <v-list-item
        v-for="run in runsStore.runs"
        :key="run.id"
        :title="'User:' + run.userName"
        :subtitle="'Duration:' + run.duration"
        :to="'run/' + run.id"
      >
      </v-list-item>
    </v-list>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .runs {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
