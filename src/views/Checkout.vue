<template>
  <div class="shoppingCart">
    <h1 v-if="success">{{msg}}</h1>
    <table>
      <caption><h3>商品结算</h3></caption>
      <tr>
        <th></th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>
          <img :src="book.imgUrl" />
        </td>
        <td>
          <router-link :to="{name : 'book',params :{ id: book.id}}" target="_blank">{{book.title}}</router-link>
        </td>
        <td>{{currency(book.price)}}</td>
        <td>{{book.quantity}}</td>
        <td>{{currency(cartItemPrice(book.id))}}</td>
      </tr>
    </table>
    <p>
      <span>
        <button class="pay" @click="pay">付款</button>
      </span>
      <span>总价:{{currency(cartTotalPrice)}}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "Checkout",
  inject: ["currency"],
  computed: {
    ...mapState("cart", {
      books: "items"
    }),
    ...mapGetters("cart", ["cartItemPrice", "cartTotalPrice"])
  },
  data() {
    return {
      success: false,
      msg: "付款成功!"
    };
  },

  methods: {
    itemPrice(price, count) {
      return price * count;
    },
    ...mapMutations("cart", ["setCartItems"]),

    pay() {
      this.setCartItems({ items: [] });
      this.success = true;
    }
  }
};
</script>