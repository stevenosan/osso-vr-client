<script setup lang="ts">
import { onMounted } from 'vue'
import { useInsightsStore } from '@/stores/insights'

const insightsStore = useInsightsStore()

onMounted(() => {
  insightsStore.fetchData()
})
</script>

<template>
  <div v-if="insightsStore.loading">Loading...</div>
  <div v-if="insightsStore.isLoaded" class="insights">
    <!-- <h1>Runs Count: {{ insightsStore.data.runsCount }}</h1> -->
    <h1>Percentage of Completed Runs: {{ insightsStore.completedRunsPercentage }}</h1>
    <!-- <h1>Percentage of Passed Runs: {{ insightsStore.data.passedRunsPercentage }}</h1>
    <h1>Median time of completed runs: {{ insightsStore.data.medianTimeCompletedRuns }}</h1> -->
    <h1>Top 5 completed runs</h1>
    <div>
      <!-- <li v-for="run in insightsStore.data.topRuns">
        {{ run.duration }}
      </li> -->
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
