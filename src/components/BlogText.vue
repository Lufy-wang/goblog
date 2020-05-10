<template>
  <div id="page">
    <h1 id="page-header">
      欢迎来到GO!Blog!
    </h1>
    <h2 class="page-text">
      <p>这是一个可以让大家分享自己在旅途中的所见所闻的网站。</p>
    </h2>

    <h2 class="page-text">
      <p>在这里，你可以与其他游客分享你旅途上遇到的美景。</p>
    </h2>
    <img src="../assets/img/undraw_through_the_park_lxnl.svg" alt="beauty" />

    <img src="../assets/img/undraw_reading_time_gvg0.svg" alt="books" />
    <h2 class="page-text">
      <p>你可以与其他游客分享你旅途上读到的书。</p>
    </h2>

    <h2 class="page-text">
      <p>你可以与其他游客分享你旅途上遇到的令人印象深刻的美食。</p>
    </h2>
    <img src="../assets/img/undraw_breakfast_psiw.svg" alt="feast" />
  <div></div>
  </div>
</template>

<script>
export default {
  name: "BlogText"
};
</script>

<style lang="scss" scoped>
#page {
  display: grid;
  grid-gap: 10px;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);

  align-items: center;
  justify-content: center;

  #page-header {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .page-text:first-of-type {
    grid-column: 1 / 3;
    grid-row: 2;
  }
}
</style>
