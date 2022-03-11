<template>
  <div class="bookcontainer">
    <h3>新书上市</h3>
    <div class="bookitem">
      <div class="book" v-for="book in books" :key="book.id">
        <figure>
          <router-link :to="`/book/${book.id}`">
            <img :src="book.imgUrl" />
            <figcaption>{{book.title}}</figcaption>
          </router-link>
        </figure>
        <p>
          {{ currency(factPrice(book.price ,book.discount))}}
          <span
            class="line"
          >{{currency(book.price)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Booksnew",
  inject: ["factPrice", "currency"],
  data() {
    return {
      books: []
    };
  },

  created() {
    this.axios
      .get("/book/new")
      .then(response => {
        if (response.status == 200) {
          this.books = response.data;
        }
      })
      .catch(err => console.log(err));
  },

  methods: {}
};
</script>

<style scoped>
.line {
  text-decoration: line-through;
  color: gray;
}
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:  2px 2px 2px #888888 ;
}
h3 {
  text-align: center;
}
.bookcontainer {
  border: 1px dotted gray;
}
.bookitem{
  display: flex;
  align-items: center;
  justify-content: space-around
}
</style>