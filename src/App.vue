<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view>
        <base-home></base-home>
      </router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import BaseHome from './components/BaseHome';
import BaseAbout from './components/BaseAbout';
import BaseContact from './components/BaseContact';
import JavaScriptComponent from './components/JavaScriptComponent';

export default {
  name: 'app',
  components: {
    AppHeader,
    BaseHome,
    BaseAbout,
    BaseContact,
    JavaScriptComponent,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>
