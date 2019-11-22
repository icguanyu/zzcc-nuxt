<template>
  <div class="news-list">
    <!-- <Title :title="'最新消息'" :subtitle="'中正社大行政事務、校內外新聞等公告。'"></Title> -->
    <NewsList :newslist="newslist" />
  </div>
</template>

<script>
  import Title from "@/components/Global/HomePageTitle";
  import NewsList from "@/components/HomePage/NewsList";
  export default {
    name: "news-list",
    components: {
      Title,
      NewsList
    },
    data() {
      return {
        newslist: [
          {
            id: 1321,
            time: {
              year: "108",
              date: "11.18"
            },
            cate: "行政",
            content: {
              title: "中正社大全新官網上線",
              text: "校務公告、最新報名資訊、專案課程、社區社區活動等資訊。"
            },
            thumb: "https://muuuuu.org/common/uploads/2016/03/13.jpg"
          },
          {
            id: 321,
            time: {
              year: "108",
              date: "10.18"
            },
            cate: "行政",
            content: {
              title:
                "【南機場辦桌團圓夜來囉！】臺北市臻佶祥社會服務協會於108/07/29啟動食享2.0計畫「惜食中途島」。",
              text:
                "南機場的各項社會服務除努力經營外需要企業團體與社會朋友的熱情贊助與更多人的參與及協助，讓幸福與愛在這裡持續發光！ 餐券每張貳仟元，扣除用餐成本，結餘將做為來年社區服務經費。12月11日來南機場一起過節，共同為社區老人與弱勢家庭孩子盡一份心力！"
            },
            thumb: "https://muuuuu.org/wp-content/uploads/2017/10/15.jpg"
          },
          {
            id: 41,
            time: {
              year: "108",
              date: "10.08"
            },
            cate: "行政",
            content: {
              title: "重南書街-探索故事導覽",
              text:
                "重慶南路一帶旅店大多始於書店，這裡是台灣最具代表性的書香園地，記憶中總有些許書香味，曾經撐起了台灣的出版業。"
            },
            thumb: "https://muuuuu.org/wp-content/uploads/2017/06/01.jpg"
          },
          {
            id: 4441,
            time: {
              year: "108",
              date: "10.01"
            },
            cate: "行政",
            content: {
              title: "Taipei全民「旗」同心",
              text:
                "透過公開徵選活動，徵選出符合並象徵臺北市的全民國防教育識別旗幟的形象，未來運用於推展全民關注、全民支持、全民參與，將全民國防理念融入市民日常生活。"
            },
            thumb:
              "http://www.zzcc.tp.edu.tw/images/1082/%E5%85%A8%E6%B0%91%E6%97%97%E5%90%8C%E5%BF%83.jpg"
          },
          {
            id: 4141,
            time: {
              year: "108",
              date: "9.01"
            },
            cate: "行政",
            content: {
              title: "蒲添生雕塑美學藝術教育展",
              text:
                "活動主題有紙黏土雕塑、紙浮雕創作、3D列印觸覺美學、手作線裝書，本校竭誠歡迎視障者、親子組合、一般民眾踴躍參加，與我們共享雕塑藝術之美！"
            },
            thumb:
              "http://www.zzcc.tp.edu.tw/images/1082/%E8%92%B2%E6%B7%BB%E7%94%9F%E9%9B%95%E5%A1%91%E7%BE%8E%E5%AD%B8%E8%97%9D%E8%A1%93%E6%95%99%E8%82%B2%E5%B1%95.jpg"
          }
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  .news-list {
    max-width: 1280px;
    margin: auto;
  }
</style>