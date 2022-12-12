import { defineConfig, resolveBaseUrl } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public", // 静态资源文件目录
  base: "./", // 公共基础路径
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    host: "localhost",
    https: false,
    cors: true,
    open: false,
    port: 9000,
    proxy: {
      "/api": {
        target: "https://xxxx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/global.scss";',
      },
    },
  },
  build: {
    target: "modules", // 浏览器兼容性 “esnext”|“modules”
    outDir: "dist", // 指定打包输出路径
    assetsDir: "assets", // 生成静态资源的存放路径
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为base64编码，以免产生过多的http请求。设置为0会完全禁用此选项。
    cssCodeSplit: true, // 启用 css代码拆分
    sourcemap: true,
    // 设置为 false 可以禁用最小化混淆，
    // 或是用来指定使用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: "terser", //terser 构建后文件体积更小
    //传递给 Terser 的更多 minify 选项。
    terserOptions: {},
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
  },
});
