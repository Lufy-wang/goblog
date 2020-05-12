<template>
  <div id="page">
    <!-- todo: 将 page-header 和 page-footer 居中-->
    <div id="page-header">
      <h1>
        欢迎来到GO!Blog!
      </h1>
      <h2>
        <p>这是一个让大家分享各自的“旅途故事”的网站。</p>
      </h2>
    </div>

    <!-- todo: 进行更好的对于手机适配，目前需要进行对 HomeHeader 的编辑 -->
    <div id="page-text">
      <h2 id="text-1">
        在这里，你可以与其他游客分享你旅途上遇到的美景。
      </h2>
      <img
        id="img-1"
        src="../../assets/img/undraw_through_the_park_lxnl.svg"
        alt="beauty"
      />

      <img
        id="img-2"
        src="../../assets/img/undraw_reading_time_gvg0.svg"
        alt="books"
      />
      <h2 id="text-2">
        你可以与其他游客分享你旅途上读到的书。
      </h2>

      <h2 id="text-3">
        你可以与其他游客分享你旅途上遇到的令人印象深刻的美食。
      </h2>
      <img
        id="img-3"
        src="../../assets/img/undraw_breakfast_psiw.svg"
        alt="feast"
      />
    </div>

    <h1 id="page-footer">
      我们在此静候你的“旅途故事”。
    </h1>
    <div style="text-align: center;">
      @lack-xu
    </div>
  </div>
</template>

<script>
// import HomeHeader from './HomeHeader';
export default {
  name: "BlogText",
  components: {
    // HomeHeader
  }
};
</script>

<style lang="scss" scoped>
#page-header {
  text-align: center;
}

#page-text {
  display: grid;
  grid-gap: 0.625rem;
  text-align: center;
  align-items: center;
  justify-content: center;
}

#page-footer {
  text-align: center;
}

// todo:可能需要对大屏的代码进行复用
@mixin Screen-compatible {
  #page-text {
    grid-template-columns: repeat(1, 1fr);
  }

  #img-2 {
    grid-row: 4 / 5;
  }

  #text-2 {
    grid-row: 3 / 4;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  #page-text {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  #page-text {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  #page-text {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  #page-text {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  @include Screen-compatible;
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  @include Screen-compatible;
}
</style>
