<script setup lang="ts">
import { onMounted } from 'vue'
import { useInsightsStore } from '@/stores/insights'

const insightsStore = useInsightsStore()

onMounted(() => {
  insightsStore.fetchData()
})
</script>

<template>
  <div v-if="!insightsStore.isLoaded">Loading...</div>
  <div v-if="insightsStore.isLoaded" class="insights">
    <!-- <h1>Runs Count: {{ insightsStore.data.runsCount }}</h1> -->
    <span
      >Percentage of Completed Runs: {{ insightsStore.insightsInfo.completedRunsPercentage }}</span
    >
    <span>Percentage of Passed Runs: {{ insightsStore.insightsInfo.passedRunsPercentage }}</span>
    <span
      >Median time of completed runs: {{ insightsStore.insightsInfo.medianTimeCompletedRuns }}</span
    >
    <h1>Top 5 completed runs</h1>
    <div>
      <v-list lines="one">
        <v-list-item
          v-for="run in insightsStore.insightsInfo.topRuns"
          :key="run.id"
          :title="'User:' + run.userName"
          :subtitle="'Duration:' + run.duration"
        >
        </v-list-item>
      </v-list>
    </div>
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
