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
    <v-list lines="four" class="scrollable-list">
      <v-list-item-group v-if="runsStore.sortedRuns">
        <v-list-item v-for="run in runsStore.runs" :key="run.id" :to="'run/' + run.id">
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              new Date(run.date).toLocaleDateString()
            }}</v-list-item-title>
            <v-list-item-subtitle class="body-2">
              <div><strong>User:</strong> {{ run.userName }}</div>
              <div><strong>Completed:</strong> {{ run.completed }}</div>
              <div><strong>Passed:</strong> {{ run.passed }}</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<!-- <template>
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
</template> -->

<style scoped>
.scrollable-list {
  max-height: 300px; /* Set the fixed height for the list */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>
