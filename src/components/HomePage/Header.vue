<template>
  <header class="header">
    <span class="header-letter">
      <router-link to="/">
        GO!Blog!
      </router-link>
    </span>
    <nav>
      <!-- todo:对于不同屏幕大小下的字体大小的设定进行修改 -->
      <span class="menu-item">
        <router-link to="/login">
          用户登陆
        </router-link>
      </span>
      <span class="menu-item">
        <router-link to="/guest">
          游客试用
        </router-link>
      </span>
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
    return {
      // activate: false
    };
  },
  mounted: {
    // sendMenu: () => this.$emit("update:msg", this.props.msg)
  }
};
</script>

<style scope lang="scss">
// todo: 整理代码，替换无用代码
.header {
  display: grid;
  font-weight: bold;
  font-size: 1.7rem;

  .header-logo {
    font-style: italic;
    align-self: center;
    justify-self: center;
  }

  .header-letter {
    font-family: Georgia;
    color: #2c3e50;
    align-self: center;
    justify-self: center;
  }

  .menu {
    display: flex;
    justify-self: center;
    align-items: center;
    list-style: none;
    white-space: nowrap;
    opacity: 0.8;
    padding: 0%;

    // justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    &-item {
      margin: 0 2rem;
      text-decoration: none;
    }
  }

  .menu-item:last-of-type {
    color: #5148b3;
    border-bottom: 0.25rem solid #5148b3;
  }
}

#Home {
  text-decoration: none;
}

@mixin Small-Screen {
  .header {
    grid-template-columns: repeat(1, 1fr);
  }

  .menu {
    justify-content: center; /* 水平居中 */
  }
}

@mixin Large-Screen {
  .header {
    grid-template-columns: 20% 1fr;
  }

  .menu {
    justify-content: flex-end;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  @include Large-Screen;
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  @include Large-Screen;
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  @include Large-Screen;
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  @include Large-Screen;
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  @include Small-Screen;
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  @include Small-Screen;
}
</style>
