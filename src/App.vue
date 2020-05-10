<template>
  <div>
    <BlogHeader></BlogHeader>
    <BlogBody></BlogBody>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import BlogBody from "./components/BlogBody.vue";

export default {
  components: {
    BlogHeader,
    BlogBody
  }
};
</script>

<style scoped lang="scss"></style>
