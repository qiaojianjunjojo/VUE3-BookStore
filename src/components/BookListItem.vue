<template>
  <div class="bookListItem">
    <img :src="item.bigImgUrl" style="width:300px;height:300px">
    <p class="title">
      <router-link :to="{name:'book',params : {id:item.id}}" targrt="_blank">{{item.title}}</router-link>
    </p>
    <p>
      <span class="factPrice">{{ currency(factPrice(item.price ,item.discount))}}</span>
      <span>
        定价:
        <i class="price">{{currency(item.price)}}</i>
      </span>
    </p>
    <p>
      <span>{{item.author}}</span>
      <span>{{item.publishDate}}</span>
      <span>{{item.bookConcern}}</span>
    </p>
    <p>{{item.brief}}</p>
    <p>
      <button class="addCartButton" @click="addCartItem(item)">加入购物车</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Booklistitem",

  inject: ["factPrice", "currency"],

  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    ...mapActions("cart", {
      addCart: "addProductToCart"
    }),
    addCartItem(item) {
      let quantity = 1;
      let newItem = {
        ...item,
        price: this.factPrice(item.price, item.discount),
        quantity
      };
      this.addCart(newItem);
      this.$router.push("/cart");
    }
  }
};
</script>

<style  scoped>
  .bookListItem{
    display: flex;
    flex-direction: column;
    justify-content: space-around ;
    align-items: center;
  }
  .price{
    text-decoration: line-through;
    color: gray;
  }
</style>