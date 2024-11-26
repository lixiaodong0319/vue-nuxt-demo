<template>
  <div>
    <h1>列表页</h1>
    <el-button type="primary" @click="add">新增</el-button>
    <el-button type="info" @click="search">查询</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button type="text" @click="editRow(scope.row)">编辑</el-button>
          <el-button type="text" @click="removeRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const list = ref<any[]>([]);
const add = () => {
  // 新增逻辑
  console.log("新增");
  navigateTo({ path: "/backDetail" }); // 在Nuxt中使用navigateTo进行路由跳转
};
const removeRow = (row: any) => {
  // 删除当前行逻辑
  console.log("删除当前行", row);
};
const editRow = (row: any) => {
  // 编辑当前行逻辑
  console.log("编辑当前行", row);
};
const search = () => {
  // 查询逻辑
  console.log("查询");
  $fetch("/api/getUserList").then((res) => {
    list.value = res.data as any[];
  });
};

onMounted(() => {
  search();
});
</script>
