<template>
    <div class="container">
       <h3>List of Movies</h3>
       <movie-search
      @search-term-change="onSearchTermChanged"
/>      
 <div class="container">                                 <!-- added props with data -->
      <movie-row v-for="movie in movies" :key="movie.id" :movie="movie"/>
 </div> 
    </div>
</template>

<script>
 import MoviesService from './../services/MoviesService'

import MovieRow from "./../components/MovieRow.vue"
import MovieSearch from './../components/MovieSearch.vue'

export default {
name:"AppMovies",
components:{
    MovieRow,
    MovieSearch
},
data(){
    return{
        movies:[]
    }
},
methods:{
     onSearchTermChanged(term) {
      MoviesService.getAll(term)
        .then(({ data }) => {
          this.movies = data
        })
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
