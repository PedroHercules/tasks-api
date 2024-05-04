import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsConfigPaths()],
	envDir: './.env.test',
	test: {
		setupFiles: 'src/tests/setup/setup.ts',
	},
})
