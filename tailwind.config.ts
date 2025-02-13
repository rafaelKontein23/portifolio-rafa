import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["'JetBrains Mono'", "monospace"],
        manrope: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config