<template>
    <div class="col">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const { ref, onMounted } = require('vue');
  
  const data = ref([]);
  
  onMounted(() => {
    // Emit the request to read data from the parent component
    emit('readData');
  });
  
  // Listen to changes from the parent component
  const setData = (newData) => {
    data.value = newData;
  };
  </script>
  