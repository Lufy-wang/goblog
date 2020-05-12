<template>
  <header class="header">
    <nav class="menu">
      <router-link to="/">
        <span id="logo">
          GO!Blog!
        </span>
      </router-link>
      <!-- todo:对于不同屏幕大小下的字体大小的设定进行修改 -->
      <router-link to="/login">
        <!-- 决定是否使用li标签 -->
        <li class="menu-item">
          用户登陆
        </li>
      </router-link>
      <router-link to="/guest">
        <li class="menu-item">
          游客试用
        </li>
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
  display: grid;
  a {
    text-decoration: none;
  }
}

.menu {
  text-align: center;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  font-size: 1.5rem;

  #logo {
    color: black;
    font-family: Georgia, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    font-weight: bold;
    text-decoration: none;
  }

  &-item {
    color: black;
    font-weight: bold;
    list-style: none;
  }
}
</style>
