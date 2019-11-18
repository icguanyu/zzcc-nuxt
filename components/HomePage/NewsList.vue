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
            <div class="title">{{news.content.title}}</div>
            <div class="text">{{news.content.text}}</div>
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
.news-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  .news {
    font-family: "Noto Serif TC", serif;
    display: flex;

    max-height: 180px;
    margin: 10px 0;
    .left-side {
      border-right: 1px solid $border-gray;
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
      padding: 20px 40px 20px 60px;
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
      height: 170px;
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
    cursor: pointer;
    margin: 20px auto;
    display: inline-block;
    padding: 15px 30px;
    background: $primary;
    color: #fff;
    border-radius: 3px;
    &:hover{
      background: $primary-light;
    }
    i{
      margin: 0 10px;
    }
  }
</style>