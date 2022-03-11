<template>
  <div class="header">
    <img src="/logo.png" style="width:50px;height:50px" />
    <HeaderSearch />
    <headerCart />
    <span v-if="!user">
      你好,请
      <router-link to="/login">登录</router-link>  免费
      <router-link to="/register">注册</router-link>
    </span>
    <span v-else>
      欢迎您,{{user.username}},
      <a href="javascript:;" @click="logout">退出登录</a>
    </span>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch.vue";
import headerCart from "./HeaderCart.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",

  data() {
    return {};
  },
  components: { HeaderSearch, headerCart },

  mounted() {},

  methods: {
    logout() {
      this.deleteUser();
    },
    ...mapMutations("user", 
    //将this.deleteUser 映射为 this.$store.commit('user/deleteUser')
    ['deleteUser']
    )
  },

  computed: {
    //user模块带有命名空间
    ...mapState(
      "user",
      //将this.user 映射为this.$store.state.user.user
      ["user"]
    )
  }
};
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: aquamarine;
  opacity: 0.8;
  height: 50px;
  position: sticky;
}
</style>