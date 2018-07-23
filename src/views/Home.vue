<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>Welcome to Your Vue.js powered Wordpress frontend App</h1>
    <hr />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title.rendered }}</h2>
        <p v-html="post.excerpt.rendered"></p>
      </li>
    </ul>
  </div>
</template>
<style>
ul{
  list-style-type: none;
  text-align: left;
  margin: 30px 0;
  padding: 0;
}
</style>
<script>
// @ is an alias to /src
import api from '@/api';

export default {
  name: 'home',
  data: () => ({
    posts: []
  }),
  beforeCreate() {
    api.getPosts( null, posts => this.posts = posts)
  }
}
</script>
