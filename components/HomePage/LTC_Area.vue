<template>
  <section>
    <div class="project-news">
      <Title :title="'長照專區'" :subtitle="'關懷老年、友善失智專區。'"></Title>

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

      <!-- <div class="swiper-button-prev-custom" slot="button-prev"></div>
      <div class="swiper-button-next-custom" slot="button-next"></div>-->
    </div>
    <v-parallax src="https://www.meiji.ac.jp/wr_common-v2/images/top/bg_topics.png" height="320">
      <div class="ltc-more">
        <div class="ltc-slogan">關懷老年，認識長照。</div>
        <div class="ltc-btn">
          <v-btn>更多長照資訊</v-btn>
        </div>
      </div>
    </v-parallax>
  </section>
</template>

<script>
  import Title from "@/components/Global/HomePageTitle";
  export default {
    name: "project-news",
    components: {
      Title
    },
    data() {
      return {
        banners: [
          "https://www.meiji.ac.jp/6t5h7p00000upwbf-img/meiji_AcademicFest_banner_1015.png",
          "http://www.zzcc.tp.edu.tw/images/1082/%E9%A0%90%E9%98%B2%E5%A4%B1%E6%99%BA%E7%97%87.jpg",
          "http://www.zzcc.tp.edu.tw/images/1081/%E8%81%AF%E9%86%AB%E4%B8%AD%E8%88%88%E9%99%A2%E5%8D%80%20%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E8%80%85%E6%9A%A8%E7%85%A7%E9%A1%A7%E8%80%85%E5%85%8D%E8%B2%BB%E5%81%A5%E5%BA%B7%E6%AA%A2%E6%9F%A5.jpg",
          "http://www.zzcc.tp.edu.tw/images/1081/ATLife%E8%87%BA%E7%81%A3%E8%BC%94%E5%85%B7%E6%9A%A8%E9%95%B7%E6%9C%9F%E7%85%A7%E8%AD%B7%E5%A4%A7%E5%B1%95.jpg"
        ],
        swiperOption: {
          slidesPerView: "4",
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
            640: {
              spaceBetween: 10,
              slidesPerView: "1"
            }
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
    width: 95%;
    max-width: 1280px;
    margin: 0 auto;
  }
  .swiper-container {
    margin-top: 15px;
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
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0%;
        left: 50%;
        width: 100%;
        transform: translateX(-50%);
      }
    }
    p {
      color: #fff;
      margin: 10px 0;
    }
  }
  .v-parallax {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 0;
    margin-top: -150px;
    padding-top: 150px;
    padding-bottom: 60px;
    .v-parallax__content {
      padding: 0 !important;
    }
  }
  .ltc-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ltc-slogan {
      position: relative;
      display: inline-block;
      text-align: center;
      font-size: 2rem;
      color: #fff;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100px;
        height: 1px;
        background: #fff;
      }
      &:before {
        left: -120px;
      }
      &:after {
        right: -120px;
      }
    }
    .ltc-btn {
      margin: 10px 0;
      width: 120px;
    }

    // background-image: url('https://www.meiji.ac.jp/wr_common-v2/images/top/bg_topics.png');
  }
  @media (max-width: 640px) {
    .swiper-slide {
      .thumb {
        height: 180px;
      }
    }
    .ltc-more {
      .ltc-slogan {
        font-size: 1.2rem;
        &:before,
        &:after {
          width: 80px;
        }
        &:before {
          left: -100px;
        }
        &:after {
          right: -100px;
        }
      }
    }
  }
</style>