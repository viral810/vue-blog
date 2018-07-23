<template>
  <div v-if="post.title" class="post">
  <h1>{{ post.title.rendered }}</h1>
  <p v-html="post.content.rendered"></p> 
  </div>
</template>

<style lang="scss">
.post{
  p{
    text-align: left;
    font-size: 18px;
    line-height: 30px;
  }
}
</style>

<script>
import api from '@/api';

export default {
  name: 'post',
  data: () => ({
    post: 'Loading...'
  }),
  beforeCreate() {
    let params = { slug: this.$route.params.slug };
    api.getPosts( params, posts => posts.map(post => this.post = post));
  }
}
</script>
