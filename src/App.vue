<template>
  <div id="app">
    <header-custom></header-custom>
    <!-- <head-hoder ></head-hoder> -->
      <!-- <p>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </p>
    <router-view></router-view> -->
  </div>
</template>

<script>
  // import HeadHoder from './components/Head'
  import HeaderCustom from './views/Header'
  export default {
    name: 'app',
    components: {
      HeaderCustom,
    }
  }
</script>
