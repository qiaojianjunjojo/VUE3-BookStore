<template>
  <div class="book">
    <img :src="book.bigImgUrl" />
    <div>
      <div class="bookInfo">
        <h3>{{book.title}}</h3>
        <p>{{book.slogan}}</p>
        <p>
          <span>作者:{{book.author}}</span>
          <span>出版社:{{book.bookConcern}}</span>
          <span>出版日期:{{book.publishDate}}</span>
        </p>
        <p>
          <span class="factPrice">{{currency(factPrice(book.price,book.discount))}}</span>
          <span class="discount">{{formatDiscount(book.discount)}}</span>
          <span>
            [定价
            <i class="price">{{currency(book.price)}}</i>]
          </span>
        </p>
      </div>
      <div class="addCart">
        <AddSubstractButtob :quantity="quantity" @updateQuantity="handleUpdate" />
        <p>
          <button class="addCartbutton" @click="addCart(book)">加入购物车</button>
        </p>
      </div>
    </div>
    <BookTabComponent :content="book.detail" />
  </div>
</template>

<script>
import AddSubstractButtob from "@/components/AddSubstractButtob.vue";
import BookTabComponent from "@/components/BookTabComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "Book",

  components: { AddSubstractButtob, BookTabComponent },

  inject: ["factPrice", "currency"],

  data() {
    return {
      book: {},
      quantity: 0
    };
  },

  created() {
    this.axios
      .get(this.$route.fullPath)
      .then(response => {
        if (response.status == 200) {
          this.book = response.data;
        }
      })
      .catch(err => alert(err));
  },

  methods: {
    handleUpdate(value) {
      this.quantity = value;
    },
    addCart(book) {
      let quantity = this.quantity;
      if (quantity === 0) {
        quantity = 1;
      }
      let newItem = {
        ...book,
        price: this.factPrice(book.price, book.discount)
      };
      this.addProductToCart({ ...newItem, quantity });
      this.$router.push("/cart");
    },
    ...mapActions("cart", ["addProductToCart"]),  
    formatDiscount(value) {
      if (value) {
        let strDigits = value.toString().substring(2);
        strDigits += "折";
        return strDigits;
      }
      return value;
    }
  }
};
</script>

<style scoped>
img {
  float: left;
}
.bookInfo h3 {
  text-align: center;
}
.bookInfo span {
  margin-right: 20px;
}

.price {
  text-decoration: line-through;
  color: gray;
}
</style>