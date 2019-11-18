<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h2>(/Users.vue)Please enter the id to load users</h2>
        <v-text-field v-model="userId" :counter="10" label="First name" required></v-text-field>
        <v-btn depressed @click="onLoadUser">Primary</v-btn>
      </v-col>
    </v-row>

    <nuxt-child />
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        userId: ""
      };
    },
    methods: {
      onLoadUser() {
        this.$router.push("/news/" + this.userId);
      }
    }
  };
</script>