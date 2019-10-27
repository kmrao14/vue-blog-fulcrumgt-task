<template>
    <div class='admin'>
        <v-container>
            <div class="mx-2 my-2 text-right">
                <v-btn large color="purple" dark to="/addpost">
                    <v-icon dark>mdi-plus</v-icon> Add New Post
                </v-btn>
            </div>
            <div>
                <h1>All Posts</h1>
                <v-divider></v-divider>
            </div>
            <v-simple-table fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">Title</th>
                        <th class="text-left">category</th>
                        <th class="text-left">isPublic</th>
                        <th class="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in allPosts" :key="post.id">
                        <td>{{post.title.substr(0, 50)}}...</td>
                        <td>
                            <v-badge 
                                v-for="category in post.categories" 
                                :key="category" 
                                color="#9C27B0"
                                class="mx-1">{{category}}</v-badge>
                        </td>
                        <td><v-badge>{{post.isPublic}}</v-badge></td>
                        <td class="text-right">
                            <v-btn 
                                color="primary" 
                                depressed 
                                class="ma-1" 
                                :to="{name: 'post', params: {id: post.id}}">View</v-btn> 
                            <v-btn 
                                color="cyan" 
                                depressed 
                                class="ma-1" 
                                dark
                                :to="{name: 'editpost', params: {id: post.id}}">Edit</v-btn> 
                            <v-btn 
                                color="red" 
                                dark 
                                depressed 
                                class="ma-1"
                                @click="onDeletePostClick(post.id)">Delete</v-btn> 
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'admin',
    data(){
        return {
            
        }
    },
    methods: {
        ...mapActions(['deletePost']),
        onDeletePostClick(postId){
            this.deletePost(postId);
        }
    },
    computed: mapGetters(['allPosts'])
}
</script>