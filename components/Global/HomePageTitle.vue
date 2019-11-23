<template>
  <div class="title">
    <h1>{{title}}</h1>
    <div class="subtitle">{{subtitle}}</div>
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
      }
    }
  };
</script>
<style lang="scss" scoped>
  .title {
    padding: 5px 0;
    margin-bottom: 5px;
    letter-spacing: 3px;
    margin-left: 10px;
    position: relative;
    display: flex;
    align-items: flex-end;
    h1 {
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
  }
  @media (max-width: 960px) {
    .title {
      margin-left: 15px;
      justify-content: space-between;
      h1 {
        line-height: 1.6rem;
        font-size: 1.4rem;
      }
      .subtitle{
        font-size: 14px;
      }
    }
  }
</style>