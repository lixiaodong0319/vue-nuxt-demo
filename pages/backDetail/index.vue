<template>
  <div>
    <h1>详情页</h1>
    <el-form :model="form" label-width="80px" :rules="rules">
      <el-form-item label="字段名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="唯一标识" prop="unique">
        <el-input v-model="form.unique"></el-input>
      </el-form-item>
      <el-form-item label="正文" prop="content">
        
      </el-form-item>
      <el-form-item label="缩略图" prop="thumbnail">
        <el-input v-model="form.thumbnail"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-input v-model="form.category_id"></el-input>
      </el-form-item>
      <el-form-item label="主分类">
        <el-input v-model="form.main_catg_id"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="form.tags" multiple>
          <el-option label="标签1" value="tag1"></el-option>
          <el-option label="标签2" value="tag2"></el-option>
          <el-option label="标签3" value="tag3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收录时间">
        <el-date-picker v-model="form.record_time" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="quill-editor" v-quill:myQuillEditor="editorOption"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  unique: "",
  content: "",
  thumbnail: "",
  category_id: "",
  main_catg_id: "",
  tags: [],
  record_time: "",
  desc: "",
});

const rules = ref({
  name: [{ required: true, message: "请输入字段名称", trigger: "blur" }],
  unique: [{ required: true, message: "请输入唯一标识", trigger: "blur" }],
  content: [{ required: true, message: "请输入正文", trigger: "blur" }],
  thumbnail: [{ required: true, message: "请输入缩略图", trigger: "blur" }],
});

const editorOption = {
  // Some Quill options...
  theme: "snow",
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
    ],
  },
};

const submitForm = async () => {
  console.log(form.value);
  // 这里可以添加提交表单的逻辑
  try {
    const res = await $fetch("/api/setDetailData", {
      method: "POST",
      body: form.value,
    });
    console.log(res);
    // 处理响应数据
  } catch (error) {
    console.error("提交失败:", error);
  }
};
</script>
