<template>
    <div class="header">
    <v-app-bar color="#191919" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
        <span>VUE</span>
        <span class="font-weight-light">BLOG</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/blogposts">Blog Posts</v-btn>
        <v-btn text to="/admin">Admin</v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('fetchPosts');
    }
}
</script>