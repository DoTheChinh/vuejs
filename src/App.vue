<template>
  <div id="app">
    <head-hoder ></head-hoder>
      <p>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeadHoder from './components/Head'
  export default {
    name: 'app',
    components: {
      HeadHoder
    }
  }
</script>
