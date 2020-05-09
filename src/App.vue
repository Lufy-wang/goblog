<template>
  <div>
    <BlogHeader msg="Hello Vue!"></BlogHeader>
    <BlogBody vue-on:click="msg='世界你好'"></BlogBody>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import BlogBody from "./components/BlogBody.vue";
// import BlogText from "./components/BlogText.vue";

export default {
  components: {
    BlogHeader,
    BlogBody
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
BlogBody {
  background-image: url(./assets/map-marked-alt-solid.svg);
}
</style>
