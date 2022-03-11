<template>
  <div class="login">
    <div class="error">{{message}}</div>
    <form>
      <div class="label">
        <input type="text" name="username" v-model.trim="username" placeholder="请输入用户名" />
        <input type="password" name="username" v-model.trim="password" placeholder="请输入密码" />
        <div class="submit">
          <input type="submit" @click.prevent="login" value="登录" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapMutations } from "vuex";

export default {
  name: "Userlogin",

  data() {
    return {
      username: "",
      password: "",
      message: ""
    };
  },

  methods: {
    login() {
      this.message = ''
      if (!this.checkForm()) return false;
      this.axios
        .post("/user/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.code === 200) {
            this.saveUser(response.data.data);
            this.username = "";
            this.password = "";
            //如果存在查询参数 登录成功后将页面带入到 登录之前的页面
            if (this.$route.query.redirect) {
              const redirect = this.$route.query.redirect;
              this.$router.replace(redirect);
            }
            else{
              this.$router.replace('/');
            }
          } else if (response.data.code === 500) {
            this.message = "用户登录失败";
          } else if (response.data.code === 400) {
            this.message = "用户名或者密码错误";
          }
        })
        .catch(err => alert(err));
    },
    ...mapMutations("user", ["saveUser"]),
    checkForm() {
      if (!this.username || !this.password) {
        this.message = "用户名和密码不能为空";
        return false;
      }
      return true;
    }
  }
};
</script>

<style >
.label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: auto;
}
.label input {
  margin: 10px;
}
</style>
