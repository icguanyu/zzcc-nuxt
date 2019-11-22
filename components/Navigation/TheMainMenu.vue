<template>
  <nav class="main-menu">
    <ul>
      <div class="quick-btn">
        <!-- <i class="fas fa-book-reader"></i>
        新學期課程一覽-->

        <img class="logo_pc" src="~assets/images/logo.png" alt />
      </div>
      <li>
        <p>課務專區</p>
        <div class="dropdown">
          <ul class="sub_menu">
            <li>
              <i class="fas fa-caret-right"></i>最新課程一覽
            </li>
            <li>
              <i class="fas fa-caret-right"></i>如何報名
            </li>
            <li>
              <i class="fas fa-caret-right"></i>報名表下載
            </li>
          </ul>
        </div>
      </li>
      <li>
        <p>校務行政</p>
        <div class="dropdown">
          <ul class="sub_menu">
            <li>
              <i class="fas fa-caret-right"></i>
              行事曆
            </li>
            <li>
              <i class="fas fa-caret-right"></i>
              講師週報
            </li>
            <li>
              <i class="fas fa-caret-right"></i>
              學員週報
            </li>
            <li>
              <i class="fas fa-caret-right"></i>
              課程異動申請
            </li>
            <li>
              <i class="fas fa-caret-right"></i>
              表單下載
            </li>
          </ul>
        </div>
      </li>
      <li>
        <p>學員專屬</p>
      </li>
      <li>
        <p>多元主題</p>
      </li>
      <li>
        <p>社大介紹</p>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        }
      ]
    },
    mounted() {
      const $menu = $(".main-menu>ul>li");
      const $dropdown = $(".dropdown");
      const $quickBtn = $(".quick-btn");
      function dropDown() {
        let nowindex = $(this).index() - 1;
        $dropdown.hide();
        $dropdown
          .eq(nowindex)
          .stop()
          .fadeIn(300);
      }

      $menu.mouseenter(dropDown);
      $menu.mouseleave(() => {
        $dropdown.stop().fadeOut(200);
      });
      $(window).scroll(toggleMenu);
      let timer;

      function toggleMenu() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          let scrollY = $(this).scrollTop();
          if (scrollY > $(".header").height()) {
            $quickBtn.addClass("show");
            return;
          }
          $quickBtn.removeClass("show");
        }, 100);
      }
    }
  };
</script>
<style lang="scss" scoped>
  li {
    list-style: none;
  }

  .main-menu {
    font-family: "Noto Sans TC", sans-serif;
    display: flex;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid $border-gray;
    position: sticky;
    top: 0;
    z-index: 99;
    > ul {
      padding: 0;
      width: 1280px;
      margin: 0px auto;
      display: flex;
      align-items: center;
      justify-content: space-around;

      > li {
        cursor: pointer;
        flex: 1;
        text-align: center;
        letter-spacing: 2px;
        p {
          position: relative;
          overflow: hidden;
          &:before {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            transform: rotate(45deg) translateX(-50%);
            bottom: -9px;
            left: 50%;
            background: #446180;
            background-image: url("https://www.transparenttextures.com/patterns/simple-dashed.png");
            opacity: 0;
            transition: all 0.3s;
          }
        }
        &:hover {
          p{
            &:before {
              opacity: 1;
            }
          }
        }
        &:first-child > p:before {
          content: "";
          position: absolute;
          width: 1px;
          height: 60%;
          background: $border-gray;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        p {
          position: relative;
          padding: 20px 0;
          margin-bottom: 0;
          &:after {
            content: "";
            position: absolute;
            width: 1px;
            height: 60%;
            background: $border-gray;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .quick-btn {
        cursor: pointer;
        //text-align: center;
        //margin: 10px;
        width: 0;
        font-size: 0;
        transform: scale(0);
        // white-space: nowrap;
        // letter-spacing: 2px;
        // border-radius: 3px;
        // background: $second;
        // color: #fff;
        transition: all 0.5s;
        img {
          width: 100%;
        }
        // &:hover {
        //   background: #feb646;
        //   box-shadow: 0px 3px 0px $second-dark;
        // }
      }
      .show {
        width: 240px;
        font-size: initial;
        transform: scale(1);
      }
    }
  }
  .dropdown {
    display: none;
    //border-bottom: 1px solid $border-gray;
    color: #fff;
    position: absolute;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: calc(100%);
    width: 100%;
    background: #446180;
    background-image: url("https://www.transparenttextures.com/patterns/simple-dashed.png");
  }

  .sub_menu {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    li {
      flex: 1;
      padding: 35px 0;
      &:hover {
        background: #6082a6;
        background-image: url("https://www.transparenttextures.com/patterns/simple-dashed.png");
      }
    }
  }

  @media (max-width: 1024px) {
    .main-menu {
      display: none;
    }
  }
</style>