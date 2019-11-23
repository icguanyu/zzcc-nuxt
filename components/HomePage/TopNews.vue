<template>
  <div class="top-news">
    <div class="content">
      <!-- <div class="head">
        <i class="fas fa-bullhorn"></i>重要訊息
      </div>-->
      <v-btn color="red" dark depressed>
        <i class="fas fa-bullhorn"></i>重要
      </v-btn>

      <p class="marquee">
        <span>活動主題有紙黏土雕塑、紙浮雕創作、3D列印觸覺美學、手作線裝書，本校竭誠歡迎視障者、親子組合、一般民眾踴躍參加，與我們共享雕塑藝術之美！</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNews",
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .top-news {
    font-family: "Noto Sans TC", sans-serif;
    width: 100%;
    background: #fff;
    margin-top: 10px;
    .content {
      width: 1280px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      align-items: center;
    }
  }
  .v-btn {
    font-size: 1.2rem;
    i {
      margin-right: 5px;
    }
  }
  .marquee {
    margin: 0 auto 0 10px;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 1.1rem;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%;
    /* show the marquee just outside the paragraph */
    animation: marquee 23s linear infinite;
  }

  .marquee span:hover {
    animation-play-state: paused;
  }

  /* Make it move */

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  @media (max-width: 960px) {
    .top-news {
      .content {
        width: 95%;
      }
    }
  }
  @media (max-width: 640px) {
    .v-btn {
      height: 30px !important;
      font-size: 1rem;
      padding: 0 8px !important;
    }
    .marquee {
      font-size: 1rem;
    }
  }
</style>