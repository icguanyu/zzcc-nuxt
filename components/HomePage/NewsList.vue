<template>
  <section class="news-list">
    <div>
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
            <div class="title">{{news.content.title|StringLengthFilter(30)}}</div>
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
    </div>
    <div class="more">
      所有消息
      <i class="fas fa-list"></i>
    </div>
  </section>
</template>

<script>
  export default {
    name: "news",
    props: {
      newslist: {
        type: Array,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .news-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .news {
    font-family: "Noto Serif TC", serif;
    display: flex;

    max-height: 160px;
    margin: 10px 0;
    .left-side {
      border-right: 1px solid $border-gray;
      padding-right: 10px;
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
          font-size: 1.6rem;
          font-weight: 700;
          color: $primary;
        }
      }
      .cate {
        cursor: pointer;
        display: inline-block;
        margin: 5px 0;
        padding: 5px 10px;
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
      &:hover {
        background: rgba($primary, 0.1);
      }
      .title {
        font-size: 1.4rem;
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
      height: 150px;
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
          color: #fff;
        }
        &:hover {
          opacity: 1;
        }
      }
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
</style>