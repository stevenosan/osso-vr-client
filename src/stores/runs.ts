import { defineStore } from 'pinia'

export const useRunsStore = defineStore('runsStore', {
  state: (): RunsStore => ({
    runs: [],
    isLoaded: false,
    error: '',
  }),

  actions: {
    async fetchData() {
      if (this.isLoaded) {
        return // Don't fetch if data is already populated
      }

      this.error = '' // Reset error before fetching

      try {
        // Example API call using fetch
        const response = await fetch('https://localhost:7082/runs')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        this.runs = result
      } catch (err) {
        // this.error = err.message // Set error message if API call fails
      } finally {
        this.isLoaded = true
      }
    },
  },
  getters: {
    getRunById: (state) => {
      return (runId: string) => state.runs.find((run) => run.id === runId)
    },
    sortedRuns: (state) => {
      return [...state.runs].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    },
  },
})

interface RunsStore {
  runs: Run[]
  isLoaded: boolean
  error: string
}

interface Run {
  id?: string
  date: Date
  completed: boolean
  passed: boolean
  duration: number
  userName: string
  interactions: Interaction[]
}

interface Interaction {
  id: string
  goalTime: number
  actualTime: number
  completed: true
  passed: true
}
