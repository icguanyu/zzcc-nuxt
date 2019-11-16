<template>
  <div>
    <TheHeader @toggleMenu="isOpen = !isOpen" />
    <TheMainMenu :isOpen="isOpen" />
    <nuxt />
  </div>
</template>

<script>
  import TheHeader from "@/components/Navigation/TheHeader";
  import TheMainMenu from "@/components/Navigation/TheMainMenu";
  export default {
    components: {
      TheHeader,
      TheMainMenu
    },
    data() {
      return {
        isOpen: false
      };
    }
  };
</script>

<style lang="scss">
  body {
    position: relative;
    background: #ffffff;
    min-height: 100vh;
    background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
  }
</style>
