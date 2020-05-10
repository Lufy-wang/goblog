<template>
  <header class="header">
    <div class="header-logo">
      <a id="Home" href="http://192.168.5:8080/">
        <img src="../assets/img/navigation.svg" alt="GO!Blog!" />
        <span class="header-letter">GO!Blog!</span>
      </a>
    </div>
    <nav>
      <ul class="menu">
        <a class="menu-item">登陆</a>
        <a class="menu-item">游客试用</a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "BlogHeader",
  props: {
    msg: String
  },
  data() {
    return {
      activate: false
    };
  }
};
</script>

<style scope lang="scss">
.header {
  display: grid;
  grid-template-columns: 20% 1fr;
  align-content: center;
  font-weight: bold;

  .header-logo {
    font-style: italic;
    align-self: center;
    justify-self: center;
  }

  .header-letter {
    font-family: Georgia;
    color: #2c3e50;
  }

  .menu {
    display: flex;
    margin: 2em;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    white-space: nowrap;
    // opacity: 0.7;

    &-item {
      margin: 0 47px;
      text-decoration: none;
    }
  }

  .menu-item:last-of-type {
    color: #f2798f;
    border-bottom: 4px solid #f2798f;
  }
}

#Home {
  text-decoration: none;
}
</style>
