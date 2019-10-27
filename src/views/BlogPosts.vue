<template>
    <div class="blogposts">
        <v-container>
            <v-row>
                <v-col md="4" v-for="post in activePosts" :key="post.id">
                    <v-card class="pa-2" outlined tile>
                        <v-card-title>{{post.title}}</v-card-title>
                        <v-card-subtitle>
                            <span>Categories: </span> <span class="mx-1" outlined v-for="(category, index) in post.categories" v-bind:key="category">{{ category }}<span v-if="index != post.categories.length-1"> |</span></span>
                        </v-card-subtitle>
                        <v-card-text>{{post.description.substr(0, 100)}} ...<v-btn
                            text
                            color="deep-purple accent-4"
                            :to="{name: 'post', params: {id: post.id}}">Read More</v-btn></v-card-text>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'blogposts',
    data(){
        return {
            
        }
    },
    computed: mapGetters(['activePosts'])
}
</script>