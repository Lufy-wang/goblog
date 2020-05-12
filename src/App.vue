<template>
  <header class="header">
    <nav class="menu">
      <router-link to="/">
        <span id="header-letter">
          GO!Blog!
        </span>
      </router-link>
      <!-- todo:对于不同屏幕大小下的字体大小的设定进行修改 -->
      <router-link to="/login">
        <span class="menu-item">
          用户登陆
        </span>
      </router-link>
      <router-link to="/guest">
        <span class="menu-item">
          游客试用
        </span>
      </router-link>
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted: {
    // sendMenu: () => this.$emit("update:msg", this.props.msg)
  }
};
</script>

<style scope lang="scss">
.header {
  text-align: center;
  padding: 0;
  display: grid;

  grid-template-columns: 20% 1fr;
}
</style>
