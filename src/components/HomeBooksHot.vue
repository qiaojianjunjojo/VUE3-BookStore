<template>
  <div class="bookRecomend">
    <h3>热门推荐</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="`/book/${book.id}`">
          {{book.title}} 
          <span>{{ currency(factPrice(book.price ,book.discount))}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Homebookshot",

  data() {
    return {
      books: []
    };
  },
  inject: ["factPrice", "currency"],

  created() {
    this.axios
      .get("/book/hot")
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