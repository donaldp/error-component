<script>
import Vue from 'vue';
import Error from '@/error-component.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Error
  },
  data() {
    return {
      errors: {}
    }
  },
  methods: {
    signUp() {
      this.errors = {
        email: [
          "The Email address provided is not valid.",
        ],
        password: [
          "Password confirmation does not match.",
          "Password must contain at least 1 numeric value.",
          "Password must contain at least 1 upper case letter."
        ]
      };
    },
    clearErrors() {
      this.errors = {};
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="group">
      <label>Email Address</label>
      <br>
      <input type="email" value="john.com" />
      <error :errors="errors" class="error-msg" name="email" />
    </div>

    <div class="group">
      <label>Password</label>
      <br>
      <input type="password" value="password" />
      <error :errors="errors" class="error-msg" name="password" />
    </div>

    <div class="group">
      <label>Password Confirmation</label>
      <br>
      <input type="password" value="password" />
    </div>

    <button @click="signUp">
      Sign Up
    </button>

    <button @click="clearErrors">
      Clear
    </button>
  </div>
</template>

<style>
  .group {
    margin: 20px 0;
  }
  .error-msg > p {
    margin: 4px 0;
  }
</style>