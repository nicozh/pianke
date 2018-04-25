<template>
  <div class="focus">
      <div class="left-p">
      
      </div>
      <div class="right-p">
        <ul>
          <li><a href=""><img src="" alt=""></a></li>
          <li><a href=""><img src="" alt=""></a></li>
          <li><a href=""><img src="" alt=""></a></li>
          <li><a href=""><img src="" alt=""></a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "focus",
  data() {
    return {};
  }
};
</script>

<style scoped>
.focus {
  margin: 0 120px;
  border: 1px solid red;
  display: flex;
}
.left-p{
  width: 480px;
  height: 480px;
  border: 1px solid red;
}
.right-p>ul{
  display: flex;
  flex-wrap: wrap
}
ul>li{
  width: 240px;
  height: 240px;
  border: 1px solid blue;
}
</style>
