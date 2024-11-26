<template>
  <div>{{ data }}</div>
  <el-button>按钮</el-button>
  <el-button>按钮1</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const data = ref<any[]>([]);
$fetch("/api/getUserList").then((res) => {
  data.value = res.data as any[];
});
</script>
