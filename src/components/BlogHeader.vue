<template>
  <div id="header">
    <ul>
      <li id="list">1{{ msg }}</li>
      <li id="list">2{{ msg }}</li>
      <li id="list">3{{ msg }}</li>
      <li id="list">4{{ msg }}</li>
    </ul>
  </div>
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
#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #list {
    padding: 30px;
    display: inline;
    list-style: none;
  }
}
</style>
