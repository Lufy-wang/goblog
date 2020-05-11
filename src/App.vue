<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
  </div>
</template>

<script>
import HomeHeader from "./components/HomePage/HomeHeader.vue";
import HomeBody from "./components/HomePage/HomeBody.vue";

export default {
  components: {
    HomeHeader,
    HomeBody
  }
};
</script>

<style scoped lang="scss"></style>
