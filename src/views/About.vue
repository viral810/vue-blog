<template>
  <div class="about" v-html="content">
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'about',
  data: () => ({
    content: 'Loading...'
  }),
  beforeCreate() {
    let params = { slug: this.$route.name };
    api.getPages( params, pages => pages.map(page => this.content = page.content.rendered));
  }
}
</script>
