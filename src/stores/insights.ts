import { defineStore } from 'pinia'

export const useInsightsStore = defineStore('insightsStore', {
  state: (): InsightsInfo => ({
    completedRunsPercentage: 0, // The object we want to populate
    loading: false, // To track loading state
    isLoaded: false,
    error: '',
  }),

  actions: {
    async fetchData() {
      if (this.isLoaded) {
        return // Don't fetch if data is already populated
      }

      this.loading = true
      // this.error = null // Reset error before fetching

      try {
        // Example API call using fetch
        const response = await fetch('https://localhost:7082/runs/insights?count=5&order=Desc')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        this.completedRunsPercentage = result.completedRunsPercentage // Populate the data object
      } catch (err) {
        // this.error = err.message // Set error message if API call fails
      } finally {
        this.loading = false // Reset loading state
        this.isLoaded = true
      }
    },
  },
})

interface InsightsInfo {
  completedRunsPercentage: number
  loading: boolean
  isLoaded: boolean
  error: string
}

// <h1>Runs Count: {{ insightsStore.data.runsCount }}</h1>
// <h1>Percentage of Completed Runs: {{ insightsStore.data.completedRunsPercentage }}</h1>
// <h1>Percentage of Passed Runs: {{ insightsStore.data.passedRunsPercentage }}</h1>
// <h1>Median time of completed runs: {{ insightsStore.data.medianTimeCompletedRuns }}</h1>
// <h1>Top 5 completed runs</h1>
// <div>
//   <li v-for="run in insightsStore.data.topRuns">
//     {{ run.duration }}
//   </li>
// </div>
