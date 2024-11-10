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
  <div class="run">
    <v-list lines="one">
      <v-list-item
        v-for="interaction in run?.interactions"
        :key="interaction.id"
        :title="interaction.id"
      >
        <span>Actual Time: {{ interaction.actualTime }}</span>
        <span>Completed: {{ interaction.completed }}</span>
        <span>Passed: {{ interaction.passed }}</span>
      </v-list-item>
    </v-list>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .run {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
