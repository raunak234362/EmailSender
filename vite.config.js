import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      // Configure the handlebars plugin if needed
      partialDirectory: path.resolve(__dirname, 'views/partials'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './views/main.handlebars',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
