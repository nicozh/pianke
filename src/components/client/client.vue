<template>
<div class="client-main">
  <div class="banner">
    <div class="top-text">
      <p>世界很美,<br>而你正好有空。</p>
      <p class="c-pianke">Stay with me，look around the world － 片刻V5.0</p>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: "client",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.client-main {
  margin-top: 90px;
}
.banner {
  width: 100%;
  height: 410px;
  background: url(../../assets/client-bg.png);
}
.top-text{
  padding-top: 100px;
  width: 77.5%;
  margin: 0 auto;
  font-size: 50px;
  font-weight: bold;
  color: #31343d
}
.top-text>.c-pianke{
  font-size: 14px;
  color: #9E9D9F;
  font-weight: 400
}

</style>