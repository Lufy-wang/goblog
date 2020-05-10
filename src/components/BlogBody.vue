<template>
  <div class="page-container">
    <!-- <span>SideBar</span> -->
    <BlogText></BlogText>
  </div>
</template>

<script>
import BlogText from "./BlogText.vue";
import { store } from "../store/index";
import { mapGetters } from "vuex";
// todo: 找出用得到的函数

export default {
  name: "BlogBody",
  components: {
    BlogText
  },
  props: {
    msg: String
  },
  // TODO: 了解为什么会导致组件失误
  computed: {
    getmsg: () => mapGetters("allMsg")
  },
  methods: {
    msgchange: () => store.commit("msgchange")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-container {
  // display: grid;
  // text-align-last: center;
}
</style>
