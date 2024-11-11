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
  <div v-if="insightsStore.isLoaded">
    <div>
      Percentage of Completed Runs: {{ insightsStore.insightsInfo.completedRunsPercentage }}
    </div>
    <div>Percentage of Passed Runs: {{ insightsStore.insightsInfo.passedRunsPercentage }}</div>
    <div>
      Median time of completed runs: {{ insightsStore.insightsInfo.medianTimeCompletedRuns }}
    </div>
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
