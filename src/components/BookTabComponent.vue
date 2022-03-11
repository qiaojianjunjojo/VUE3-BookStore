<template>
  <div class="tabComponent">
    <button
      v-for="tab in tabs"
      :key="tab.title"
      :class="['tab-button',{activate : currentTab ===tab.title}]"
      @click="currentTab = tab.title"
    >{{tab.displayName}}</button>
    <keep-alive>
      <component :is="currentTabComponent" :content="content" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import BookIntroduction from "@/components/BookIntroduction";
import BookCommentList from "@/components/BookCommentList";
import BookQA from "@/components/BookQA";

export default {
  name: "Booktabcomponent",

  props: {
    content: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      currentTab: "introduction",
      tabs: [
        { title: "introduction", displayName: "图书介绍" },
        { title: "comment", displayName: "图书评价" },
        { title: "qa", displayName: "图书问答" }
      ]
    };
  },
  components: { BookIntroduction, BookComment: BookCommentList, BookQa:BookQA },//这里直接写BookQA是没有办法渲染的.

  computed: {
    currentTabComponent() {
      return "book-" + this.currentTab;
    }
  },

  methods: {}
};
</script>