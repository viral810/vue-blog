<template>
  <div id="app">
    <header>
      <div id="logo">
        <h3>VuePress</h3>
      </div>
      <keep-alive>
      <div id="nav">
        <router-link v-for="page in pages" :key="page.id" :to="{ name: page.slug }">{{ page.title.rendered }}</router-link>
      </div>
      </keep-alive>
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
    padding-right: 20px;

    &:last-child{
      padding-right: 0;
    }

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
    let params = { order: 'asc' };
    api.getPages( params, pages => this.pages = pages)
  }
}
</script>