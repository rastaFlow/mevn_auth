<template>
  <div>
    <h1>Login</h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                placeholder="Your UserName"
                name="username"
                id="username"
                v-model="username"
                class="form-control"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                id="password"
                v-model="password"
                class="form-control"
              />
            </div>
            <input type="submit" class="btn btn-primary" />
            &nbsp;&nbsp;&nbsp;
            <router-link to="/register" class="card-link" value="login"
              >Create A Account</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>
