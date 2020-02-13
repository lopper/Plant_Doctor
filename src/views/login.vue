<template>
  <v-layout column align-center>
    <img src="@/assets/logo.png" width="230px" height="190px" alt="Vuetify.js" class="mb-5" />
    <div>
      <h1>Welcome to the DR.PLANT</h1>

      <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">pw:</label>
        <input id="password" type="password" v-model="password" />
      </div>

      <button type="submit" v-on:click="submitForm">login</button>
    </div>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm: function() {
      //console.log(this.username, this.password);
      //event.preventDefault();
      this.$store.commit("loggedin");
      return;
      if (this.username == "LEE" && this.password == "1234") {
        console.log(this.username, this.password);
        this.$store.commit("loggedin");
      }
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password
      };
      axios
        .post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
