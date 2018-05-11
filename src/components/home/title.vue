<template>
  <div class="s-title">
    <div class="title-text">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titl',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.s-title {
  padding: 70px 0 40px 28px;
}
.title-text {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    background: #333333;
    position: absolute;
    top: 2px;
    left: -28px;
  }
}
</style>
