<template>
  <header class="header">
    <div class="header-logo">
      <span class="header-letter">GO!Blog!</span>
    </div>
    <nav>
      <ul class="menu">
        <!-- <li class="menu-item">简介</li> -->
        <li class="menu-item">登陆</li>
        <li class="menu-item">游客试用</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "BlogHeader",
  props: {
    msg: String
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
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    opacity: 0.7;

    &-item {
      margin: 0 47px;
    }
  }

  .menu-item:last-of-type {
    color: #f2798f;
    border-bottom: 4px solid #f2798f;
  }
}
</style>
