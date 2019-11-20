<template>
  <section>
    <div class="project-news">
      <div class="title">
        專案課程
        <span>/活動</span>
      </div>

      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
            <div class="thumb">
              <img :src="banner" />
            </div>
            <p>Topics話題の出来事</p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="more">
        「個」が
        世界を動かす。
      </div>
      <!-- <div class="swiper-button-prev-custom" slot="button-prev"></div>
      <div class="swiper-button-next-custom" slot="button-next"></div>-->
    </div>
    <v-parallax src="https://www.meiji.ac.jp/wr_common-v2/images/top/bg_topics.png" height="220"></v-parallax>
  </section>
</template>

<script>
  export default {
    name: "project-news",
    data() {
      return {
        banners: [
          "https://www.meiji.ac.jp/6t5h7p00000upwbf-img/meiji_AcademicFest_banner_1015.png",
          "https://www.meiji.ac.jp/6t5h7p00000upwbf-img/math-everywhere.png",
          "https://www.meiji.ac.jp/6t5h7p00000upwbf-img/overseas.png",
          "https://www.meiji.ac.jp/6t5h7p00000upwbf-img/mgv.jpg"
        ],
        swiperOption: {
          slidesPerView: "auto",
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
            // dynamicBullets: true
          },
          loop: true,
          // speed: 500,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false
          // },
          // navigation: {
          //   nextEl: ".swiper-button-next-custom",
          //   prevEl: ".swiper-button-prev-custom"
          // },
          breakpoints: {
            1280: {
              slidesPerView: "3"
            },
            1024: {
              slidesPerView: "2"
            },
            640: {}
          }
        }
      };
    }
  };
</script>


<style lang="scss" scoped>
  section {
    position: relative;
    width: 100%;
  }
  .project-news {
    width: 1280px;
    margin: 0 auto;
    .title {
      font-family: "Noto Serif TC", serif;
      color: $black;
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 30px;
      span {
        font-size: 1rem;
        font-style: italic;
      }
    }
  }
  .swiper-container {
    padding-right: 80px;
    padding-bottom: 20px;
    position: relative;
    overflow: hidden;
  }
  .swiper-slide {
    width: 300px;
    //width: 1280px;;
    .thumb {
      width: 100%;
      height: 220px;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
      }
    }
    p {
      color: #fff;
      margin: 10px 0;
    }
  }

  // .swiper-button-prev-custom,
  // .swiper-button-next-custom {
  //   z-index: 10;
  //   cursor: pointer;
  //   position: absolute;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center center;
  //   width: 70px;
  //   height: 70px;
  //   background-color: rgba(0, 0, 0, 0.1);
  //   border-radius: 50%;
  // }

  // .swiper-button-prev-custom {
  //   left: 20px;
  //   background-image: url("~assets/images/icons/prev.png");
  // }
  // .swiper-button-next-custom {
  //   right: 20px;
  //   background-image: url("~assets/images/icons/next.png");
  // }
  .v-parallax {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1;
    margin-top: -160px;
    .v-parallax__content {
      padding: 0 !important;
    }
  }
  .more {
    width: 100%;
    font-size: 2rem;
    color: #fff;
    // background-image: url('https://www.meiji.ac.jp/wr_common-v2/images/top/bg_topics.png');
  }
  // @media (max-width: 960px) {
  //   .swiper-slide {
  //     width: 800px;
  //   }
  // }
  // @media (max-width: 640px) {
  //   .swiper-button-prev-custom,
  //   .swiper-button-next-custom {
  //     width: 50px;
  //     height: 50px;
  //   }
  //   .swiper-slide {
  //     width: 90%;
  //   }
  // }
</style>