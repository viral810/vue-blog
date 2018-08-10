<template>
  <div id="app">
    <header>
      <div id="logo">
        <h3><router-link to="/">VuePress</router-link></h3>
      </div>
      <keep-alive>
      <ul id="categories__menu">
        <li v-for="cat in categories" :key="cat.id">
          {{ cat.name }}
        </li>
      </ul>
      <div id="nav">
        <router-link v-for="page in pages" :key="page.ID" :to="{ name: page.title.toLowerCase() }">{{ page.title }}</router-link>
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
  max-width: 1170px;
  margin: 0 auto;
}

header{
  display: inline-block;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1200px;
  flex: 1 1 auto;
}

#logo{
  float: left;

  h3{
    margin: 0;

    a{
      text-decoration: none;
    }
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

#categories__menu{
  display: flex;
  width: 100%;
  align-items: flex-start;

  li{
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0,0,0,.84);
  }
}
</style>

<script>
import api from './api';

export default {
  name: 'app',
  data: () => ({
    pages: [],
    categories: [],
  }),
  beforeCreate() {
    api.getMenu( 'primary', menu => this.pages = menu.items)
    api.getCategories( categories => this.categories = categories)
  }
}
</script>