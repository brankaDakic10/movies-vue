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
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import MovieSearch from './MovieSearch.vue'
  import {
        mapMutations} from 'vuex'
    export default {
        name: "NavBar",
        components:{
            MovieSearch
        },
        methods: {
            ...mapMutations([
                'setSearchTerm'
            ])
        }
    }
</script>

<style scoped>
.movies-nav{
    background-color: crimson;
}
</style>