<template>
  <div class="focus clearfix">    
        <ul class="clearfix">
          <li><a href=""><img src="http://hpimg.pianke.com/25c4460266d120ed5536c854a84e8ea620171012.jpg?imageView2/2/w/640/format/jpg"></a></li>
          <li><a href=""><img src="http://hpimg.pianke.com/2918689193578579208adf3bbeb839ff20171012.jpg?imageView2/2/w/640/format/jpg" alt=""></a></li>
          <li><a href=""><img src="http://hpimg.pianke.com/a4c7ed5503e463c747a3c9bc768c784620171012.jpg?imageView2/2/w/640/format/jpg" alt=""></a></li>
          <li><a href=""><img src="http://hpimg.pianke.com/83cb6cc4014a86a4858116244546102820171012.jpg?imageView2/2/w/640/format/jpg" alt=""></a></li>
          <li><a href=""><img src="http://hpimg.pianke.com/10ec7bfffb06c90f7d36421df5afaebf20170321.jpg?imageView2/2/w/640/format/jpg" alt=""></a></li>
        </ul>
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
  margin: 0 auto;
}

ul > li:first-child {
  width: 480px;
  height: 480px;
}
ul > li {
  width: 240px;
  height: 240px;
  float: left;
  /* border: 1px solid red; */
  overflow: hidden;
}
ul>li:hover img{
  transform: scale(1.1);
  transition: 1s;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
img {
  width: 100%;
}
</style>
