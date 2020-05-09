<template>
  <div>
    <BlogHeader msg="Hello Vue!"></BlogHeader>
    <BlogBody msg="你好世界"></BlogBody>
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
  data() {
    return {
      active: false
    };
  }
};
</script>

<style scoped lang="scss">
BlogBody {
  background-image: url(./assets/map-marked-alt-solid.svg);
}
</style>
