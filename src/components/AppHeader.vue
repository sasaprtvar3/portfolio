<template>
  <header>
      <nav class="menu" style="font-size:30px">
     <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contact">Contact</a></li>
     </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'app-header',
};
</script>

<style scoped>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
