<template>
  <div class="headerCart">
    <a href="javascript:;" @click.prevent="handleCart">
      <span>购物车 {{cartItemsCount}}</span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Headercart",

  data() {
    return {};
  },

  methods: {
    handleCart() {
      this.$router.push({ path: "/cart" });
    }
  },

  computed: {
    //cart模块带有命名空间
    ...mapGetters("cart", {
      //vuex 的store中定义一个getter,得到购物车中商品的数量
      //讲
      cartItemsCount: "itemsCount"
    })
  }
};
</script>