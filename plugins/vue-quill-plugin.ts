import VueQuillEditor from 'vue-quill-editor/dist/ssr'; 

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) { // 确保在客户端环境中使用
        nuxtApp.vueApp.use(VueQuillEditor); 
    }
});

