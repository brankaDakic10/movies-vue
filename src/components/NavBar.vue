<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark movies-nav">
            <router-link class="navbar-brand" :to="{name:'home'}">AppMovies</router-link>
            <div class="navbar-nav w-100">
                <router-link class="nav-item nav-link" :to="{name:'movies'}">Movies</router-link>
        <router-link class="nav-item nav-link" :to="{name:'add'}">Add</router-link>

                <div class="navbar-nav"></div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.movies-nav{
    background-color: crimson;
}
</style>