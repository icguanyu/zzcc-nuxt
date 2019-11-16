<template>
  <div class="header">
    <div class="content">
      <div class="logo">
        <img class="logo_pc" src="~assets/images/logo.png" alt />
      </div>
      <div class="quick-link">
        <nuxt-link to="/">
          <i class="fas fa-caret-right"></i>講師到課查詢
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fas fa-caret-right"></i>報名課程
        </nuxt-link>
        <nuxt-link to="/">
          <i class="fas fa-caret-right"></i>開南商工
        </nuxt-link>
      </div>
      <div class="quick-btn">
        <a href="#" class="btn teacher">講師投課</a>
        <a href="#" class="btn student">
          <i class="fas fa-book-reader"></i>課程總覽
        </a>
        <div class="hamburger" @click="$emit('toggleMenu')">
          <div class="nav-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    position: relative;
    width: 100%;
    border-top: 5px solid $primary;
    border-bottom: 1px solid $border-gray;
    padding: 10px 0;
    background: #fff;
    transition: all 0.3s;
    z-index: 99;
    .content {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .logo {
    padding: 5px 10px;
    width: 300px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .quick-link {
    display: flex;
    margin: 0 25px;
    a {
      font-size: 16px;
      color: $black;
      margin: 0 10px;
      padding: 10px 0;
      letter-spacing: 1px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 0px 2px 0px #0b408e;
      }
      i {
        margin: 0 5px;
      }
    }
  }
  .quick-btn {
    display: flex;
    .btn {
      text-align: center;
      margin: 10px 8px;
      letter-spacing: 2px;
      border-radius: 3px;
      font-size: 16px;
      transition: all 0.3s;
      padding: 15px 5px;
    }
    .teacher {
      width: 110px;
      border: 1px solid $border-dark;
      color: #666;
      &:hover {
        box-shadow: 0px 3px 0px #0b408e;
      }
    }
    .student {
      width: 140px;
      color: #fff;
      background: $second;
      &:hover {
        background: #feb646;
        box-shadow: 0px 3px 0px $second-dark;
      }
      i {
        margin: 0 5px;
      }
    }
  }

  .hamburger {
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px solid #000;
    // display: none;
    padding: 15px;
    border-radius: 3px;
    background: $primary;
    &:hover {
      background: $primary-light;
    }
    .nav-icon {
      display: block;
      height: 3px;
      width: 30px;
      position: relative;
      background: #fff;
      transition: all 0.2s ease-out;
      border-radius: 8px;
      &:before,
      &:after {
        background: #fff;
        border-radius: 8px;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }
      &:after {
        top: 8px;
      }
      &:before {
        top: -8px;
      }
    }
  }

  @media (max-width: 960px) {
    .header {
      border-top: 0px;
      padding: 0;
      position: sticky;
      top: 0px;
      .content {
        width: 100%;
      }
    }
    .logo {
      padding: 0 10px;
      img {
        height: 100%;
      }
    }
    .quick-link {
      display: none;
    }
    .quick-btn {
      .btn {
        height: 100%;
        padding: 25px 5px;
        margin: 0;
        border-radius: 0;
      }
      .teacher {
        display: none;
      }
      .student {
        width: 130px;
        &:hover {
          box-shadow: none;
        }
      }
    }
    .hamburger {
      display: flex;
      margin: 0;
      border-radius: 0;
      padding: 15px 20px;
      .nav-icon {
        width: 25px;
        height: 2px;
      }
    }
  }
</style>