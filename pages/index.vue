<template>
  <div>
    <TopNews :topNews="topNews" />
    <Swiper />

    <News />

    <LeftLink />
    <LTCArea />
  </div>
</template>

<script>
  import TopNews from "@/components/HomePage/TopNews";
  import Swiper from "@/components/HomePage/swiper";
  import News from "@/components/HomePage/News";
  import LTCArea from "@/components/HomePage/LTC_Area";
  import LeftLink from "@/components/HomePage/LeftLink";
  export default {
    components: {
      Swiper,
      TopNews,
      News,
      LTCArea,
      LeftLink
    },
    // asyncData(context, callback) {
    //   console.log(context);
    //   setTimeout(() => {
    //     callback(null, {});
    //   }, 1500);
    // },
    data() {
      return {
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
  
  @media (max-width: 960px) {
    
  }
  @media (max-width: 640px) {
  }
</style>
