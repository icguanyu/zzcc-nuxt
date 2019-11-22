<template>
  <section>
    <Title :title="'學員專區'"></Title>
    <div class="quick-link">
      <QLStudent :data="student_btns" />
    </div>
    <Title :title="'行政專區'"></Title>
    <QLStudent :data="teacher_btns" />
  </section>
</template>

<script>
  import Title from "@/components/Global/HomePageTitle";
  import QLStudent from "@/components/Swipers/QuickLinkStudent";
  export default {
    name: "quick-link",
    components: {
      Title,
      QLStudent
    },
    data() {
      return {
        student_btns: [
          {
            name: "課程一覽",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/31817010910299bc0e.png"
          },
          {
            name: "行事曆",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/73917010910263d5fd.png"
          },
          {
            name: "報名須知",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/0961701091040d6fa0.png"
          },
          {
            name: "新生報名表",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/6651701091035f4b13.png"
          },
          {
            name: "舊生報名表",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/4131701091038fe6d3.png"
          },
          {
            name: "榮譽榜",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/6771701091027853e7.png"
          },
          {
            name: "班長事務",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/7561701091025116c3.png"
          },
          {
            name: "研習證明",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/2261701091037c438f.png"
          },
          {
            name: "查詢",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/24517010910396e4b0.png"
          }
        ],
        teacher_btns: [
          {
            name: "查詢",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/24517010910396e4b0.png"
          },
          {
            name: "講師投課",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/2261701091037c438f.png"
          },
          {
            name: "粉絲專頁",
            thumb:
              "https://www.iconninja.com/files/245/45/195/facebook-media-social-like-network-fb-icon.svg"
          },
          {
            name: "官方LINE@",
            thumb:
              "https://images.vexels.com/media/users/3/137381/isolated/preview/4e11f9375a642d3d1d296dfadd5be8e0-line-icon-logo-by-vexels.png"
          },

          {
            name: "Youtube",
            thumb:
              "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          }
        ],
        swiperOption: {
          direction: "vertical",
          slidesPerView: 3, //一行显示3个
          slidesPerColumn: 2, //显示2行
          // grabCursor: true,
          //spaceBetween: 10,
          autoWidth: true,
          breakpoints: {
            640: {
              direction: "horizontal",
              slidesPerView: 2, //一行显示3个
              slidesPerColumn: 1 //显示2行
            }
          }
        }
      };
    }
  };
</script>


<style lang="scss" scoped>
  .quick-link {
    overflow: hidden;
    margin-bottom: 10px;
  }
</style>