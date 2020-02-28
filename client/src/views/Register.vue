<template>
  <div>
    <h1>Register</h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
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
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
                v-model="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                placeholder="Your@Email.com"
                name="email"
                id="email"
                v-model="email"
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
            <div>
              password
              <label for="password_confirm">Password Confirm</label>
              <input
                type="password_confirm"
                placeholder="Your Password Confirm"
                name="password_confirm"
                id="password_confirm"
                v-model="password_confirm"
                class="form-control"
              />
            </div>
            <input type="submit" class="btn btn-primary" />
            &nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link"
              >Already Have Account</router-link
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
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirm: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("/login");
        }
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
