import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { r3f } from "@react-three/editor/vite"
import { visualizer } from 'rollup-plugin-visualizer';

// change this to match your theme file path
const wp_theme_route = 'wp-content/themes/ohio';

// https://vitejs.dev/config/

// export default defineConfig((env) => ({
//   plugins: [
//     env.command === 'build' ? react() : r3f(),
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html', // The output file for the analysis
      open: true, // Automatically open the file in your browser after the build
      template: 'treemap' // Treemap visualization
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);

          // set img folder
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } 
          // set models folder
          else if (/glb|gltf/i.test(extType)) {
            extType = 'models';
          }

          // return assets in correct folders
          return wp_theme_route + `/assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: wp_theme_route + '/assets/js/[name]-[hash].js',
        entryFileNames: wp_theme_route + '/assets/js/[name]-[hash].js',
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return 'vendor';
  //         }
  //         if (id.includes('src/components')) {
  //           return 'components';
  //         }
  //         // You can add more custom chunks based on your file structure
  //       }
  //     }
  //   },
  // }
})
