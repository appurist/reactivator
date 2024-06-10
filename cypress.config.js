import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'd4b7my',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
