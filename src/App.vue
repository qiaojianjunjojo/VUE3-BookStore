<template>
  <div id="app">
    <Header />
    <Menus />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menus from "@/components/Menus.vue";
import { factPrice, currency, formatTime } from "./utils/util.js";

export default {
  components: { Header, Menus },
  provide() {
    return {
      factPrice,
      currency,
      formatTime
    };
  }
};
</script>