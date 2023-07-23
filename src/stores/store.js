import { defineStore } from 'pinia';
import firebase from 'firebase';
import 'firebase/firestore'; // Impor jika menggunakan Firestore
import firebaseConfig from './firebaseConfig';

// Inisialisasi Firebase dengan konfigurasi
firebase.initializeApp(firebaseConfig);

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    async getPosts() {
      try {
        const querySnapshot = await firebase.firestore().collection('posts').get();
        const posts = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          posts.push(post);
        });
        this.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },
    async addPost(newPost) {
      try {
        await firebase.firestore().collection('posts').add(newPost);
        await this.getPosts(); 
      } catch (error) {
        console.error(error);
      }
    },
    async deletePost(postId) {
      try {
        await firebase.firestore().collection('posts').doc(postId).delete();
        await this.getPosts(); 
      } catch (error) {
        console.error(error);
      }
    },
  }
});
