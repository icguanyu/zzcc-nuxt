<template>
  <div class="left-link">
    <Title :title="'快速連結'" :subtitle="'網站常用連結'"></Title>
    <div class="quick-link">
      <div class="title-btn">
        <i class="fas fa-book-reader"></i>學員專區
      </div>
      <QuickLink :data="student_btns" />
    </div>

    <div class="quick-link">
      <div class="title-btn">
        <i class="fas fa-book-reader"></i>學員專區
      </div>
      <QuickLink :data="teacher_btns" />
    </div>
  </div>
</template>

<script>
  import Title from "@/components/Global/HomePageTitle";
  import QuickLink from "@/components/Swipers/QuickLink";
  export default {
    name: "quick-link",
    components: {
      QuickLink,
      Title
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
              "https://www.mohw.gov.tw/Public/Images/201701/24517010910396e4b0.png"
          },
          {
            name: "官方LINE@",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/2261701091037c438f.png"
          },

          {
            name: "Youtube",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/2261701091037c438f.png"
          },
          {
            name: "查詢",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/24517010910396e4b0.png"
          },
          {
            name: "課程一覽",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/31817010910299bc0e.png"
          },
          {
            name: "行事曆",
            thumb:
              "https://www.mohw.gov.tw/Public/Images/201701/73917010910263d5fd.png"
          }
        ]
      };
    }
  };
</script>


<style lang="scss" scoped>
  .left-link {
    width: 1280px;
    margin: auto;
    position: relative;
    margin-bottom: 15px;
  }
  .quick-link {
    display: flex;
    align-items: center;
    .title-btn {
      width: 120px;
      height: 90px;
      margin-right: 10px;
      padding: 10px 30px;
      background: $primary-light;
      border-radius: 3px;
      font-family: "Noto Sans TC", sans-serif;
      text-align: center;
      font-size: 1.3rem;
      letter-spacing: 2px;
      color: #fff;
      line-height: 1.6rem;
      i {
        //font-size: 1rem;
        margin-bottom: 3px;
        display: block;
      }
    }
  }
  @media (max-width: 960px) {
    .left-link {
      width: 95%;
      .quick-link {
        .title-btn {
          width: 100px;
          font-size: 1rem;
          line-height: 1.2rem;
          height: 80px;
          padding: 10px 25px;
        }
      }
    }
  }
</style>