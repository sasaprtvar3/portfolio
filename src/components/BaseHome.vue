<template>
    <div id="home-base">
        <h1 style="font-size:100px">Welcome</h1>
        <header>
                <br>
                <br>
                <button href="#/javascript" class="button" style="font-size:20px">JavaScript</button>
                <button href="#/keystone" class="button" style="font-size:20px">KeyStone</button>
                <button href="#/vue" class="button" style="font-size:20px">Vue</button>
        </header>
    </div>
</template>

<script>
export default {
  name: 'base-home',
};
</script>

<style scoped>
.button {
    background-color: #35495E;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>


