<template>
  <div>
    <TopNews :topNews="topNews" />
    <Swiper />
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" lg="3">
          <QuickLink />
        </v-col>
        <v-col cols="12" sm="9" lg="9">
          <News />
        </v-col>
      </v-row>
    </v-container>
  
    <LTCArea />
    
  </div>
</template>

<script>
  import TopNews from "@/components/HomePage/TopNews";
  import Swiper from "@/components/HomePage/swiper";
  import News from "@/components/HomePage/News";
  import LTCArea from "@/components/HomePage/LTC_Area";
  import QuickLink from "@/components/HomePage/QuickLink";
  export default {
    components: {
      Swiper,
      TopNews,
      News,
      LTCArea,
      QuickLink,
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
  .container {
    max-width: 1280px;
  }
</style>
