<template>
  <div class="bg-container">
    <BlogText v-bind:msg="msg"></BlogText>
  </div>
</template>

<script>
import BlogText from "./BlogText.vue";
export default {
  name: "BlogBody",
  components: {
    BlogText
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#bg-logo {
  display: grid;
  opacity: 0.3;
  color: #f29188;
  // background-image: url(../assets/map-marked-alt-solid.svg);
}
</style>
