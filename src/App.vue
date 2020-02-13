<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      v-show="isLoggedIn"
      fixed
      app
    >
      <v-list dense>
        <!--title 뒤에 @click="$router.push({name:'home'})"-->

        <v-list-tile router: to='/' exact>
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile router: to='home' exact>
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About Us</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router: to='front' exact>
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Frontend</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router: to='back' exact>
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Backend</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile router: to='ml' exact>
          <v-list-tile-action>
            <i class="fas fa-user"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ML</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

        <v-list-tile router: to='store' exact>
          <v-list-tile-action>
            <i class="fas fa-home"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Stored Picture</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      
    </v-navigation-drawer>
    <!--v-toolbar color="#42b983" dark fixed app-->
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>DR.PLANT</v-toolbar-title>
    <!--/v-toolbar-->
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="#42b983" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn;
    }
  },
  props: {
    source: String

  },
  methods:{
    home(){
      alert('click');
    }
  }
}
</script>