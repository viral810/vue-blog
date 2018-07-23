<template>
  <div id="app">
    <header>
      <div id="logo">
        <h3>VuePress</h3>
      </div>
      <div id="nav" v-for="page in pages" :key="page.id">
        <router-link v-bind:to="page.slug === 'home' ? '/' : page.slug">{{ page.title.rendered }}</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
}

header{
  display: inline-block;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 768px;
}

#logo{
  float: left;

  h3{
    margin: 0;
  }
}

#nav {
  float: right;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-right: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import api from './api';

export default {
  name: 'app',
  data: () => ({
    pages: []
  }),
  beforeCreate() {
    api.getPages( pages => this.pages = pages)
  }
}
</script>