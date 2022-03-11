<template>
  <div class="register">
    <form>
      <div class="label">
        <label class="error">{{message}}</label>
        <input type="text" name="username" v-model.trim.lazy="username" placeholder="请输入用户名" />
        <input type="password" name="username" v-model.trim="password" placeholder="请输入密码" />
        <input type="password" name="username" v-model.trim="password2" placeholder="请输入确认密码" />
        <input type="tel" v-model.trim="mobile" placeholder="请输入手机号" />
        <div class="submit">
          <input type="submit" @click.prevent="register" value="注册" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Userregister",

  data() {
    return {
      username: "",
      password: "",
      password2: "",
      mobile: "",
      message: ""
    };
  },

  watch: {
    username(newVal) {
      //取消上一次请求
      if (newVal) {
        this.axios
          .get("/user/" + newVal)
          .then(response => {
            if (response.data.code === 200) {
              let isExist = response.data.data;
              if (isExist) {
                this.message = "该用户名已存在";
              } else {
                this.message = "用户名可用";
              }
            }
          })
          .catch(err => console.log(err));
      }
    }
  },

  methods: {
    register() {
      this.message = "";
      if (!this.checkForm()) return;
      this.axios
        .post("/user/register", {
          username: this.username,
          password: this.password,
          mobile: this.mobile
        })
        .then(response => {
          if (response.data.code === 200) {
            this.saveUser(response.data.data);
            this.username = "";
            this.password = "";
            this.password2 = "";
            this.mobile = "";
            this.$router.push("/");
          } else if (response.status.code === 500) {
            this.message = "用户注册失败";
          }
        })
        .catch(err => alert(err));
    },

    checkForm() {
      if (!this.username || !this.password || !this.password2 || !this.mobile) {
        this.$msgBox.show({ title: "所有字段不能为空" });
        return false;
      }
      if (this.password !== this.password2) {
        this.$msgBox.show({ title: "2次密码不一致" });
        return false;
      }
      return true;
    },
    ...mapMutations("user", ["saveUser"])
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