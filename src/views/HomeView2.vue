<template>
  <main class="container">
    <h1>Halaman muka</h1>
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todo.data">
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div class="col">

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
    </div>
  </main>
</template>
<script setup>
import { reactive,onMounted } from 'vue';
import {db,timestamp} from "../config/firebaseConfig";
import { addDoc, collection,doc,onSnapshot,query } from "firebase/firestore"; 

let todo = reactive({ 
  title: "", 
  content: "",
  data: [],
  });

const clearInput = async()=>{
  todo.title= "";
  todo.content= "";
};

const readData =async()=>{
  onSnapshot(collection(db, "todos"), (querySnapshot) => {
  const todos = [];
  querySnapshot.forEach((doc) => {
  let todo = {
      id:doc.id,
      title:doc.data().title,
      content:doc.data().content,
  }
  todos.push(todo)
  });
  todo.data=todos;
  console.log(todos);
  });
};

const handleSubmit=async()=>{
  await addDoc(collection(db, "todos"), {
  title: todo.title, 
  content: todo.content,
  createdAt:timestamp,
  updateAt:timestamp,
  });
  clearInput();
};
onMounted (()=>{
  readData();
});
</script>