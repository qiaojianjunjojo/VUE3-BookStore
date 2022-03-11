<template>
  <div class="category">
    <h3>图书分类</h3>
    <div v-for="category in categories" :key="category.id">
      <h5>{{category.name}}</h5>
      <router-link
        class="mg20"
        v-for="child in category.children"
        :key="child.id"
        :to="`/category/${child.id}`"
      >{{child.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homecategory",

  data() {
    return {
      categories: []
    };
  },

  created() {
    this.axios
      .get("/category")
      .then(response => {
        if (response.status == 200) {
          this.categories = response.data;
        }
      })
      .catch(err => console.log(err));
  },

  methods: {}
};
</script>

<style>
.mg20{
  margin-right: 20px;
}
</style>