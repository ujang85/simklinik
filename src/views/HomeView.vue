<template>
  <main class="container">
    <h1>Halaman muka</h1>
    <div class="row">
      <form-input @submit="handleSubmit" />
      <table :data="todoData" @readData="readData" />
    </div>
  </main>
</template>

<script>
import { usePostStore } from '../stores/store';

export default {
  name: 'HomeView',
  setup() {
    const postStore = usePostStore();

    return {
      postStore
    };
  },
  mounted() {
    this.postStore.getPosts(); // Mengambil daftar post saat komponen dimuat
  },
  data() {
    return {
      newPostTitle: '',
      newPostContent: ''
    };
  },
  methods: {
    addPost() {
      // Membuat post baru
      const newPost = {
        title: this.newPostTitle,
        content: this.newPostContent,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      this.postStore.addPost(newPost)
        .then(() => {
          this.newPostTitle = '';
          this.newPostContent = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePost(postId) {
      // Menghapus post berdasarkan ID
      this.postStore.deletePost(postId)
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

