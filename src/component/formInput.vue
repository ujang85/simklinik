<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="todo.title">
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea class="form-control" id="content" cols="30" rows="10" v-model="todo.content"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const todo = reactive({
    title: "",
    content: "",
  });
  
  const handleSubmit = () => {
    // Emit the submitted data to the parent component
    emit('submit', { title: todo.title, content: todo.content });
    // Clear the input fields
    todo.title = "";
    todo.content = "";
  };
  </script>
  