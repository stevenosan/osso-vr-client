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
    <v-list lines="two" class="scrollable-list">
      <v-list-item
        v-for="run in runsStore.sortedRuns"
        :key="run.id"
        :title="'User:' + run.userName"
        :subtitle="'Duration:' + run.duration"
        :to="'run/' + run.id"
      >
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped>
.scrollable-list {
  max-height: 300px; /* Set the fixed height for the list */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>
