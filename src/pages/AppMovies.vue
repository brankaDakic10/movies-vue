<template>
    <div class="container">
        App Movies
                                                 <!-- added props with data -->
      <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
</template>

<script>
 import MoviesService from './../services/MoviesService'

import MovieRow from "./../components/MovieRow.vue"


export default {
name:"AppMovies",
components:{
    MovieRow 
},
data(){
    return{
        movies:[]
    }
},
 beforeRouteEnter (to, from, next) {
    MoviesService.getAll()
      .then(({data}) => {
        next((vm) => {
          vm.movies = data
        })
      })
  }
}

</script>

<style>

</style>
