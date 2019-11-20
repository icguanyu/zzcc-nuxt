<template>
  <div class="top-news">
    <div class="content">
      <div class="head">
        <i class="fas fa-bullhorn"></i>重要訊息
      </div>

      <div v-swiper:mySwiper="swiperOption" v-if="topNews">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(news,index) in topNews" :key="index">
            <div class="news">
              <div class="date">{{news.date}}</div>
              <div class="msg">{{news.msg}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNews",
    props: {
      topNews: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: "auto",
          // spaceBetween: 10,
          direction: "vertical",
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .top-news {
    width: 100%;
    background: #fff;
    padding: 10px 0;
    .content {
      width: 1280px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      align-items: center;
      .head {
        flex: 1;
        white-space: nowrap;
        padding: 10px 20px;
        background: $primary;
        border-radius: 3px;
        letter-spacing: 2px;
        color: #fff;
        i {
          margin-right: 5px;
        }
      }
      .news {
        display: flex;
        align-items: center;
        padding: 0 10px;
        .date {
          color: $font-gray;
        }
        .msg {
          margin-left: 10px;
          color: $font-black;
        }
      }
    }
  }
  .swiper-container {
    flex: 11;
    height: 40px;
  }
  .swiper-slide {
    display: flex;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
</style>