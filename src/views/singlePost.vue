<template>
    <div class="singlePost">
        <v-container>
            <v-card class="pa-2" outlined tile>
                <v-btn text color="purple" to="/blogposts"><v-icon>arrow-back</v-icon> Back to All Posts</v-btn>
                <v-divider></v-divider>
                <v-card-title>{{getPostById.title}}</v-card-title>
                <v-card-subtitle>
                    <span>Categories: </span> <span class="mx-1" outlined v-for="(category, index) in getPostById.categories" v-bind:key="category">{{ category }}<span v-if="index != getPostById.categories.length-1"> |</span></span>
                </v-card-subtitle>
                <v-card-text>{{getPostById.description}}</v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'singlePost',
    data(){
        return {
            id: parseInt(this.$route.params.id)
        }
    },

    computed: {
        ...mapGetters(['getPostById']),
        getPostById(){
            return this.$store.getters.getPostById(this.id);
        }
    }
}
</script>