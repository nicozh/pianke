<template>
  <div id="ap">
    <transition name="fade">
      <header v-show="headShow">
          <div class="head">
            <div class="head-logo"></div>
            <nav>
            <ul>
              <li :class="{active:link.isactive}" v-for=" (link,index) in links" :key="link.link" @click="changeClass(index)" >
                <router-link :to=link.link>{{link.name}}</router-link>
                </li>              
            </ul>
              <div class="nav-icon">
                <div class="write">
                  <img src="" alt="">
                </div>
                <div class="notice"></div>
                <div class="user-logo"></div>
              </div>
            </nav>
          </div>
      </header>
    </transition>

    <router-view></router-view>

    <footer>
      <div class="foot"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headShow: true,
      links: [
        { link: "/", name: "首页", isactive: true },
        { link: "read", name: "阅读", isactive: false },
        { link: "radio", name: "电台", isactive: false },
        { link: "fragment", name: "碎片", isactive: false },
        { link: "client", name: "客户端", isactive: false }
      ]
    };
  },
  components: {},
  methods: {
    menu() {
      scroll = document.documentElement.scrollTop || document.body.scrollTop;
      scroll > 7 ? (this.headShow = false) : (this.headShow = true);
    },
    changeClass(index) {
      this.links.map(function(item) {
        item.isactive = false;
      });
      this.links[index].isactive = true;
    }
},
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  computed: {}
};
</script>

<style>
@import url(./reset.css);

.fade-enter-active,
.fade-leave-active {
  transition: margin-top 0.5s;
}
.fade-enter,
.fade-leave-to {
  margin-top: -90px;
}

header,
footer {
  height: 90px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 4px 0 #ececec;
}
.head {
  margin: 0 auto;
  height: 100%;
  display: flex;
  width: 1200px;
}
.head-logo {
  background-image: url(./assets/head-logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  width: 80px;
  height: 90px;
}
main {
  color: #333;
  /* padding-top: 90px; */
  margin: 126px auto;
  width: 960px;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin-left: 172px;
  flex: 1;
}
.nav-icon {
  display: flex;
}

nav > ul {
  display: flex;
  height: 100%;
}
nav > ul > li {
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box
}
nav>ul>li>a{
  padding: 26px;
  
}
nav > ul > li.active {
  border-bottom: 3px solid #333333;
  font-weight: bolder;
  background: #fbfbfb;  
}
nav > ul > li:hover {
  background: #fbfbfb;
}

.write{
  width: 42px;
  height: 42px;
  border: 1px solid #5FB870;
  position: relative;
  border-radius: 50%;
  
}
.write::after{
  content: '';
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #5FB870;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -18px;
  margin-left: -18px;
}
.notice,.user-logo{
  width: 42px;
  height: 42px;
  border: 1px solid #CACACA;
  border-radius: 50%;
  margin-left: 25px
}
footer {
  height: 118px;
  background: #1a1818;
}
</style>