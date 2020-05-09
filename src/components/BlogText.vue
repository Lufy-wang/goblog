<template>
  <div id="bg-text">
    <span>{{ msg }}</span>
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
}
</style>
