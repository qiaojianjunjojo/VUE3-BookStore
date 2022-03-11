<template>
  <div class="shoppingCart">
    <table>
      <tr>
        <th></th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
        <th>操作</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>
          <img :src="book.imgUrl" />
        </td>
        <td>
          <router-link :to="{name : 'book',params :{ id: book.id}}" target="_blank">{{book.title}}</router-link>
        </td>
        <td>{{currency(book.price)}}</td>
        <td>
          <button @click="handleSubtract(book)">-</button>
          {{book.quantity}}
          <button @click="handleAdd(book.id)">+</button>
        </td>
        <td>{{currency(cartItemPrice(book.id))}}</td>
        <td>
          <button @click="deleteCartItem(book.id)">删除</button>
        </td>
      </tr>
    </table>
    <hr>
    <p>
      <span>总价:{{currency(cartTotalPrice)}}</span>
      <span>
        <button class="checkout" @click="checkout">结算</button>
      </span>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "Shoppingcart",
  inject: ["currency"],
  computed: {
    ...mapState("cart", {
      books: "items"
    }),
    ...mapGetters("cart", ["cartItemPrice", "cartTotalPrice"])
  },
  data() {
    return {};
  },

  methods: {
    itemPrice(price, count) {
      return price * count;
    },
    ...mapMutations("cart", [
      "deleteCartItem",
      "incrementItemQuantity",
      "setCartItems"
    ]),
    handleAdd(id) {
      this.incrementItemQuantity({ id: id, quantity: 1 });
    },
    handleSubtract(book) {
      let quantity = book.quantity - 1;
      if (quantity <= 0) {
        this.deleteCartItem(book.id);
      } else {
        this.incrementItemQuantity({ id: book.id, quantity: -1 });
      }
    },
    checkout() {
      this.$router.push({ path: "/check" });
    }
  }
};
</script>

<style>
  .shoppingCart table{
    width: 85%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  table th,td{
    /* border: 1px solid gray; */
    text-align: center;
  }
</style>