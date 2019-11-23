<template>
  <section class="news-list">
    <div class="top">
      <!-- <Title :title="'最新消息'" :subtitle="'中正社大行政事務、校內外新聞等公告。'"></Title> -->
      <v-tabs center-active v-model="tabs" color="primary">
        <v-tab>所有</v-tab>
        <v-tab>行政</v-tab>
        <v-tab>學務</v-tab>
        <v-tab>活動</v-tab>
        <v-tab>政令</v-tab>
      </v-tabs>
    </div>
    <!-- <TopNews :topNews="topNews" /> -->
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <div class="news" v-for="news in newslist" :key="news.id">
          <div class="left-side">
            <div class="time">
              <div class="year">{{news.time.year}}</div>
              <div class="date">{{news.time.date}}</div>
            </div>
            <div class="cate">{{news.cate}}</div>
          </div>

          <div class="center">
            <div class="content">
              <div class="news-title">{{news.content.title|StringLengthFilter(30)}}</div>
              <div class="text">{{news.content.text|StringLengthFilter(70)}}</div>
            </div>
          </div>
          <div class="thumbnail-right" :style="`backgroundImage:url(${news.thumb})`">
            <router-link :to="`/news/${news.id}`">
              <div class="mask">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </router-link>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item>
        <v-skeleton-loader
          ref="skeleton"
          :boilerplate="false"
          type="list-item-three-line"
          :tile="false"
          class="mx-auto"
        ></v-skeleton-loader>
      </v-tab-item>
      <v-tab-item>未建立</v-tab-item>
      <v-tab-item>未建立</v-tab-item>
      <v-tab-item>未建立</v-tab-item>
    </v-tabs-items>
    <div class="more">
      消息一覽
      <i class="fas fa-list"></i>
    </div>
  </section>
</template>

<script>
  import TopNews from "@/components/HomePage/TopNews";
  import Title from "@/components/Global/HomePageTitle";
  export default {
    name: "news",
    components: {
      Title,
      TopNews
    },
    props: {
      newslist: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        tabs: null,
        topNews: [
          {
            date: "2018/11/01",
            msg: "舛添要一さんも再登壇】今月のゲストをご紹介"
          },
          {
            date: "2018/11/01",
            msg: "舛添要一さんも再登壇】今月のゲストをご紹介"
          },
          {
            date: "2018/11/01",
            msg: "舛添要一さんも再登壇】今月のゲストをご紹介"
          },
          {
            date: "2018/11/01",
            msg: "舛添要一さんも再登壇】今月のゲストをご紹介"
          },
          {
            date: "2018/11/01",
            msg: "舛添要一さんも再登壇】今月のゲストをご紹介"
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .news-list {
    font-family: "Noto Serif TC", serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .news {
      display: flex;
      max-height: 150px;
      margin: 10px 0;
      &:hover {
        // .left-side {
        //   box-shadow: -6px 0px 0px $primary;
        // }
        .center {
          background: rgba($primary, 0.1);
        }
      }
      .left-side {
        border-right: 1px dashed $border-gray;
        padding-right: 5px;
        padding-left: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .time {
          .year {
            color: $font-gray;
          }
          .date {
            margin: 5px 0;
            font-size: 1.4rem;
            font-weight: 700;
            color: $primary;
          }
        }
        .cate {
          cursor: pointer;
          display: inline-block;
          margin: 5px 0;
          padding: 3px 8px;
          border: 1px solid $border-gray;
          border-radius: 2px;
          transition: all 0.1s;
          &:hover {
            color: #fff;
            background: $second;
            border: 1px solid $second;
          }
        }
      }
      .center {
        flex: 7;
        padding: 20px 40px 20px 40px;
        .news-title {
          font-family: "Noto Serif TC" !important;
          font-size: 1.3rem;
          line-height: 1.6rem;
          padding: 0;
          margin-bottom: 10px;
          text-align: left;
        }
        .text {
          letter-spacing: 1.5px;
          line-height: 1.2rem;
          color: $font-text;
        }
      }
      .thumbnail-right {
        flex: 3;
        height: 140px;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        .mask {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: all 0.2s;
          i {
            font-size: 1.6rem;
            color: #fff;
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .title {
      flex: 2;
    }
    .v-tabs {
      flex: 1;
    }
  }

  .more {
    position: relative;
    cursor: pointer;
    margin: 20px auto;
    padding: 10px 30px;
    border-radius: 3px;
    color: $font-text;
    border: 1px solid $border-gray;
    &:hover {
      color: #fff;
      background: $primary;
      border: 1px solid $primary;
    }
    i {
      margin: 0 10px;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 300px;
      height: 1px;
      background: $border-gray;
    }
    &:after {
      left: 110%;
    }
    &:before {
      right: 110%;
    }
  }
  @media (max-width: 960px) {
    .top {
      flex-direction: column;
      align-items: flex-start;
    }
    .news-list {
      .news {
        .left-side {
          padding-right: 10px;
          padding-left: 5px;
          .time {
            .date {
              margin: 3px 0;
              font-size: 1rem;
            }
          }
          .cate {
            font-size: 14px;
            margin: 3px 0;
            padding: 3px;
          }
        }
        .center {
          flex: 7;
          padding: 10px 20px 10px 20px;
          .news-title {
            font-size: 1rem;
            line-height: 1.2rem;
            margin-bottom: 5px;
          }
          .text {
            letter-spacing: 1px;
            line-height: 1.1rem;
          }
        }
        .thumbnail-right {
          flex: 4;
          height: 160px;
          .mask {
            i {
              font-size: 1.6rem;
              color: #fff;
            }
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
    .more {
      &:before,
      &:after {
        width: 200px;
      }
    }
  }
  @media (max-width: 640px) {
    .news-list {
      .news {
        flex-direction: column-reverse;
        max-height: 480px;
        &:hover {
          .center {
            background: #fff;
          }
        }
        .left-side {
          border: none;
          padding: 0;
          width: 90%;
          margin: auto;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .time {
            display: flex;
            align-items: center;
            font-size: 1rem;
            .year {
              margin-right: 5px;
            }
          }
          .cate {
            align-self: flex-end;
            font-size: 14px;
            margin: 5px 0;
            padding: 0 3px;
          }
        }
        .center {
          width: 95%;
          margin: auto;
          margin-top: -40px;
          z-index: 1;
          background: #fff;
          border: 1px dashed $border-dark;
          .news-title {
            font-size: 1.2rem;
            line-height: 1.4rem;
            margin-bottom: 8px;
          }
          .text {
            letter-spacing: 1px;
            line-height: 1.1rem;
          }
        }
        .thumbnail-right {
          max-height: 220px;
        }
      }
    }
    .more {
      &:before,
      &:after {
        width: 100px;
      }
    }
  }
</style>