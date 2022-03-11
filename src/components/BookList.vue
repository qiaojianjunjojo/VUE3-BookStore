<template>
  <div class=book>
    <div class='bookitem' v-for="book in list" :key="book.id">
      <BookListItem :item="book" />
    </div>
  </div>
</template>

<script>
import BookListItem from "@/components/BookListItem.vue";

export default {
  name: "Booklist",

  components: { BookListItem },
  
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style  scoped>
  .book{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  .book .bookitem{
    margin: 10px;
    /* transform: scale(0.7); */
  
  }
</style>