<template>
  <div id="app">
    <header>Header</header>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
header,
footer {
  height:90px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>