<template>
  <div>
    <Loading v-if="loading" />
    <h3 v-else>{{title}}</h3>
    <BookList :list="books" v-if="books.length" />
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import BookList from "@/components/BookList.vue";

export default {
  name: "Books",

  components: { Loading, BookList },

  data() {
    return {
      loading: true,
      title: "",
      books: [],
      message: ""
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.title = to.meta.title;
      let url = vm.setRequestUrl(to.fullPath);
      vm.getBooks(url);
    });
  },
  beforeRouteUpdate(to) {
    let url = this.setRequestUrl(to.fullPath);
    this.getBooks(url);
    return true;
  },

  methods: {
    getBooks(url) {
      this.message = "";
      url = 'book/new' //for debugger
      this.axios
        .get(url)
        .then(response => {
          if (response.status == 200) {
            this.loading = false;
            this.books = response.data;
            if (this.books.length === 0) {
              if (this.$route.name == "category") {
                this.message = "当前分类下没有图书！";
              } else {
                this.message = "没有搜索到匹配的图书!";
              }
            }
          }
        })
        .catch(err => console.log(err));
    },
    setRequestUrl(path) {
      let url = path;
      if (path.indexOf("/category") != -1) {
        url = "/books" + url;
      }
      return url;
    }
  }
};
</script>

<style>
h3{
  text-align: center;
}
</style>