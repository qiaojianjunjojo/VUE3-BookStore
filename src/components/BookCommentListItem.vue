<template>
  <div class="bookCommentListItem">
    <div>
      <span>{{item.username}}</span>
      <span>{{formatTime(item.commentDate)}}</span>
    </div>
    <div>{{item.content}}</div>
  </div>
</template>

<script>
export default {
  name: "Bookcommentlistitem",

  inject: ["formatTime"],
  
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>