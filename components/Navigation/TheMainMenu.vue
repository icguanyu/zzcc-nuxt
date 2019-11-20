<template>
  <nav class="main-menu">
    <ul>
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
      <div class="quick-btn">
        <i class="fas fa-book-reader"></i>
        新學期課程一覽
      </div>
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
        let nowindex = $(this).index();
        $dropdown.hide();
        $dropdown.eq(nowindex).stop().fadeIn(300);
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
    display: flex;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid $border-gray;
    position: sticky;
    top: 0;
    height: 70px;
    z-index: 99;
    > ul {
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
        border-bottom: 4px solid rgba(255, 255, 255, 0);

        &:hover {
          border-bottom: 4px solid $second;
          transition: all 0.3s;
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
          padding: 25px 0;
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
        text-align: center;
        margin: 10px;
        padding: 15px;
        width: 0;
        font-size: 0;
        transform: scale(0);
        white-space: nowrap;
        letter-spacing: 2px;
        border-radius: 3px;
        background: $second;
        color: #fff;
        transition: all 0.5s;
        &:hover {
          background: #feb646;
          box-shadow: 0px 3px 0px $second-dark;
        }
      }
      .show {
        width: 200px;
        font-size: initial;
        transform: scale(1);
      }
    }
  }
  .dropdown {
    display: none;
    border: 1px solid $border-gray;
    color: #fff;
    position: absolute;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: calc(100%);
    width: 100%;
    background: $primary;
    background-image: url("https://www.transparenttextures.com/patterns/simple-dashed.png");
  }

  .sub_menu {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    li {
      flex: 1;
      padding: 30px 0;
      &:hover {
        background: $primary-dark;
      }
    }
  }

  @media (max-width: 1024px) {
    .main-menu {
      display: none;
    }
  }
</style>