<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRunsStore } from '@/stores/runs'

const runsStore = useRunsStore()

const props = defineProps({
  id: String,
})

// let run: Run

onMounted(() => {
  runsStore.fetchData()
})

const run = computed(() => {
  return runsStore.getRunById(props.id!)
})
</script>

<template>
  <div>
    <v-list lines="four" class="scrollable-list">
      <v-list-item-group v-if="run?.interactions">
        <v-list-item v-for="interaction in run?.interactions" :key="interaction.id">
          <v-list-item-content>
            <v-list-item-title class="headline">{{ interaction.id }}</v-list-item-title>
            <v-list-item-subtitle class="body-2">
              <div><strong>Goal Time:</strong> {{ interaction.goalTime }}</div>
              <div><strong>Actual Time:</strong> {{ interaction.actualTime }}</div>
              <div><strong>Completed:</strong> {{ interaction.completed }}</div>
              <div><strong>Passed:</strong> {{ interaction.passed }}</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<style scoped>
.scrollable-list {
  max-height: 300px; /* Set the fixed height for the list */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>
