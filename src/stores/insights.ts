import { defineStore } from 'pinia'

export const useInsightsStore = defineStore('insightsStore', {
  state: (): InsightsStore => ({
    insightsInfo: null,
    isLoaded: false,
    error: '',
  }),

  actions: {
    async fetchData() {
      if (this.insightsInfo) {
        return // Don't fetch if data is already populated
      }

      this.error = '' // Reset error before fetching

      try {
        // Example API call using fetch
        const response = await fetch('https://localhost:7082/runs/insights?count=5&order=Desc')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        this.insightsInfo = result
      } catch (err) {
        // this.error = err.message // Set error message if API call fails
      } finally {
        this.isLoaded = true
      }
    },
  },
})

interface InsightsStore {
  insightsInfo: InsightsInfo | null
  isLoaded: boolean
  error: string
}

interface InsightsInfo {
  completedRunsPercentage: number
  passedRunsPercentage: number
  medianTimeCompletedRuns: number
  topRuns: topRuns[]
}

interface topRuns {
  id: string
  userName: string
  duration: number
}
