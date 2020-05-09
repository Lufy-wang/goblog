<template>
  <div id="bg-text">
    <button
      id="text"
      @mouseenter="msg = '世界你好'"
      @mouseleave="msg = '你好世界'"
    >
      <span>
        {{ msg }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BlogText",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
#bg-text {
  text-align: center;
  vertical-align: middle;
  margin: 20%;

  #text {
    background: transparent;
    border: none;
    font-size: 40px;
  }
}
</style>
