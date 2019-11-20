<template>
  <div>
    <TopNews :topNews="topNews" />
    <Swiper />
    <News />
    <ProjectNews />
  </div>
</template>

<script>
  import TopNews from "@/components/HomePage/TopNews";
  import Swiper from "@/components/HomePage/swiper";
  import News from "@/components/HomePage/News";
  import ProjectNews from "@/components/HomePage/ProjectNews";
  export default {
    components: {
      Swiper,
      TopNews,
      News,
      ProjectNews
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
</style>
