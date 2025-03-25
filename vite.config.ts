import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tr } from 'framer-motion/client'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  base:"/portifolio",
  server: {
     open:true
  }

})
