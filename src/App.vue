<template>
  <div id="ap">
    <transition name="fade">
      <header v-show="headShow">
          <div class="head">
            <div class="head-logo"></div>
            <nav>
            <ul>
              <li><a href="">首页</a></li>
              <li><router-link to="/read">阅读</router-link></li>
              <li><router-link to="/radio">电台</router-link></li>
              <li><router-link to="/fragment">碎片</router-link></li>
              <li><router-link to="/client">客户端</router-link></li>
            </ul>
              <div class="nav-icon">
                <div class="write">书写</div>
                <div class="notice">通知</div>
                <div class="user-logo">用户</div>
              </div>
            </nav>
          </div>
      </header>
    </transition>

    <router-view></router-view>

    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headShow: true
    };
  },
  components: {},
  methods: {
    menu() {
      scroll = document.documentElement.scrollTop || document.body.scrollTop;
      scroll > 7 ? (this.headShow = false) : (this.headShow = true);
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
}
nav > ul > li {
  padding: 26px;
}
</style>