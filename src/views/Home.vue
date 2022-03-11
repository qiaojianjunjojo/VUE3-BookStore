<template>
  <div>
    <div class="home">
      <HomeCategory />
      <HomeScrollPic />
      <HomeBooksHot />
    </div>
    <div>
      <BooksNew />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCategory from "@/components/HomeCategory.vue";
import HomeScrollPic from "@/components/HomeScrollPic.vue";
import HomeBooksHot from "@/components/HomeBooksHot.vue";
import BooksNew from "@/components/BooksNew.vue";

export default {
  name: "Home",
  components: {
    HomeCategory,
    HomeScrollPic,
    HomeBooksHot,
    BooksNew
  }
};
</script>

<style  scoped>
.home {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
