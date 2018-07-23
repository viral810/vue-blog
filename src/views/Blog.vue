<template>
  <div class="blog" v-html="content">
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'blog',
  data: () => ({
    content: 'Loading...'
  }),
  beforeCreate() {
    let params = { slug: this.$route.name };
    api.getPages( params, pages => pages.map(page => this.content = page.content.rendered));
  }
}
</script>
