// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['monaco-editor']
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           monaco: ['monaco-editor']
//         }
//       }
//     }
//   }
// });



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import monacoEditorPlugin from "vite-plugin-monaco-editor";

// export default defineConfig({
//   plugins: [
//     react(),
//     monacoEditorPlugin()
//   ]
// });



// import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor-esm';

export default defineConfig({
  plugins: [monacoEditorPlugin(), react()],
});

