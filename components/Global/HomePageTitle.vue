<template>
  <div class="title">
    <h1>{{title}}</h1>
    <div class="subtitle">{{subtitle}}</div>
    <nuxt-link :to="link.path" v-if="link">
      <div class="more">
        {{link.name}}
        <i class="fas fa-list"></i>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "home-page-title",
    props: {
      title: {
        type: String,
        required: true,
        default: "Please Set A Title"
      },
      subtitle: {
        type: String,
        required: false
      },
      link: {
        type: Object,
        required: false
      }
    }
  };
</script>
<style lang="scss" scoped>
  .title {
    font-family: "Noto Serif TC", serif !important;
    padding: 5px 0;
    letter-spacing: 3px;
    margin-left: 10px;
    position: relative;
    display: flex;
    align-items: flex-end;
    h1 {
      font-family: "Noto Serif TC", serif;
      font-size: 1.4rem;
      
      font-weight: 700;
      margin: 0;
      color: $font-black;
    }
    .subtitle {
      font-size: 1rem;
      line-height: 1.4rem;
      letter-spacing: 1px;
      font-style: italic;
      margin: 0 0 0 10px;
      color: $font-gray;
    }
    &:before {
      content: "";
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      border-top: 12px solid $primary;
      border-bottom: 12px solid $second;
    }
    // .more {
    //   position: absolute;
    //   right: 0;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   color: $primary;
    //   padding: 5px 15px;
    //   border: 1px solid $primary;
    //   border-radius: 20px;
    //   i {
    //     margin: 0 5px;
    //   }
    // }
  }
</style>