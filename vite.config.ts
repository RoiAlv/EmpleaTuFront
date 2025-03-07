import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,  // Convertir process.env.PORT a un número
    host: '0.0.0.0',  // Asegura que el servidor sea accesible desde todas las interfaces
    hmr: true,  // Habilitar HMR si es necesario en desarrollo
    allowedHosts: ['empleatufront.onrender.com'],  // Agregar tu dominio aquí
  },
  build: {
    outDir: 'dist',  // Configura la carpeta de salida para la construcción
  },
  preview: {
    port: process.env.PORT ? Number(process.env.PORT) : 4173,  // Convertir process.env.PORT a un número
    host: '0.0.0.0',  // Hacer que la vista previa sea accesible desde todas las interfaces
  },
});
