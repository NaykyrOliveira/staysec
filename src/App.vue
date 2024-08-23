<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #19191af5;
  color: rgb(219, 221, 223);
} 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
