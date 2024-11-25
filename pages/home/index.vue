<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref<any[]>([]);
$fetch("/api/getUserList").then((res) => {
  data.value = res.data as any[];
});
</script>
