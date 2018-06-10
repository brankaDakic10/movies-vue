<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark movies-nav">
            <router-link class="navbar-brand" :to="{name:'home'}">AppMovies</router-link>
            <div class="navbar-nav w-100">
                <router-link class="nav-item nav-link" :to="{name:'movies'}">Movies</router-link>
        <router-link class="nav-item nav-link" :to="{name:'add'}">Add</router-link>

               
                                      <!-- Mutations -->
    <movie-search @search-term-change="setSearchTerm" class="ml-auto" />
 <div class="navbar-nav">
     <!--  -->
       <router-link class="nav-item nav-link" :to="{name: 'login'}" v-if="!isAuthenticated">Login</router-link>
<a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">LogOut</a>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
// added authService for login-logout
 import {
        authService
    } from './../services/AuthService'
    import MovieSearch from './MovieSearch.vue'
 import { mapMutations, mapGetters } from "vuex";
    export default {
        name: "NavBar",
        components:{
            MovieSearch
        },
        methods: {
            ...mapMutations([
                'setSearchTerm',
                'setIsAuthenticated'
            ]),

         logout() {
      authService.logout();
      this.setIsAuthenticated(false);
    }
        },
        
  computed: {
    ...mapGetters({
      getAuthent: "getIsAuthenticated"
    }),
   isAuthenticated() {
      return this.getAuthent;
    }
  }
};
</script>

<style scoped>
.movies-nav{
    background-color: crimson;
}
</style>