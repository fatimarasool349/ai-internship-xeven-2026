import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const crewaiUrl = env.VITE_CREWAI_API_URL

  const proxy = {}

  // Proxy CrewAI AMP API to avoid CORS and keep bearer token server-side in dev
  if (crewaiUrl) {
    proxy['/api/crewai'] = {
      target: crewaiUrl,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api\/crewai/, ''),
      configure: (proxyServer) => {
        proxyServer.on('proxyReq', (proxyReq) => {
          if (env.VITE_CREWAI_BEARER_TOKEN) {
            proxyReq.setHeader('Authorization', `Bearer ${env.VITE_CREWAI_BEARER_TOKEN}`)
          }
        })
      },
    }
  }

  // Optional local backend for file uploads
  if (env.VITE_UPLOAD_URL?.includes('localhost')) {
    proxy['/upload'] = 'http://localhost:8000'
  }

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy,
    },
  }
})
