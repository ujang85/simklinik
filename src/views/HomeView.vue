<template>
  <main class="container">
    <h1>Halaman muka</h1>
    <div class="row">
      <form-input @submit="handleSubmit" />
      <table :data="todoData" @readData="readData" />
    </div>
  </main>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { db, timestamp } from '../config/firebaseConfig';
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';

const todo = reactive({
  title: "",
  content: "",
  data: [],
});

// Function to read data
const readData = async () => {
  onSnapshot(collection(db, "todos"), (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      let todo = {
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
      };
      todos.push(todo);
    });
    todo.data = todos;
  });
};

// Function to handle form submission
const handleSubmit = async (formData) => {
  await addDoc(collection(db, "todos"), {
    title: formData.title,
    content: formData.content,
    createdAt: timestamp,
    updateAt: timestamp,
  });
  // After adding data, read data again to refresh the table
  readData();
};
// Automatically read data when the component is mounted
onMounted(() => {
  readData();
});
</script>

<style>
/* Add your styles here */
</style>

<script>
// Import child components
import FormInput from '../component/formInput.vue';
import Table from '../component/table.vue';

export default {
  components: {
    FormInput,
    Table,
  },
};
</script>
