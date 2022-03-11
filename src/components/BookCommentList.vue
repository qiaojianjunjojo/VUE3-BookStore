<template>
  <div>
    <h3>{{message}}</h3>
    <BookCommentListItem v-for="comment in comments" :key="comment.id" :item="comment" />
  </div>
</template>

<script>
import BookCommentListItem from "@/components/BookCommentListItem";

export default {
  name: "Bookcommentlist",

  data() {
    return {
      comments: [],
      message: ""
    };
  },

  components: { BookCommentListItem },

  created() {
    this.message = "";
    let url = this.$route.path + "/comment";
    this.axios
      .get(url)
      .then(response => {
        if (response.status == 200) {
          this.comments = response.data;
          if (this.comments.length == 0) {
            this.message = "当前没有任何评论！";
          }
        }
      })
      .catch(err => console.log(err));
  },

  methods: {}
};
</script>