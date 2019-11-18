<template>
  <div class="title">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
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
        required: false,
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
    padding: 10px 0;
    text-align: center;
    position: relative;
    h1 {
      font-size: 1.6em;
      font-weight: 700;
      margin: 0;
      color: $font-black;
    }
    p {
      letter-spacing: 2px;
      font-style: italic;
      margin: 5px 0;
      color: $font-gray;
    }
    .more {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: $primary;
      padding: 5px 15px;
      border: 1px solid $primary;
      border-radius: 20px;
      i {
        margin: 0 5px;
      }
    }
  }
</style>