<template>
    <div class="addpost">
        <v-container>  
            <h1>Create New Post</h1>
            <v-divider></v-divider>

            <v-form ref="addpostForm">
                <v-text-field
                  label="Title"
                  v-model="blogPost.title" 
                  :rules="rules"
                  filled
                  required></v-text-field>

                <v-textarea 
                  label="Description"
                  v-model="blogPost.description" 
                  :rules="rules"
                  filled
                  required></v-textarea>

                <v-select 
                  label="Category" 
                  v-model="blogPost.categories"
                  :items="items"  
                  :rules="rules"
                  multiple 
                  filled
                  required></v-select>

                <v-switch 
                  label="Is Publish"
                  v-model="blogPost.isPublic"
                  :rules="rules"></v-switch> 

                <v-btn large color="primary" @click="onAddPostClick()">Create Post</v-btn>
            </v-form>
        </v-container>
        <v-snackbar
          v-model="showAlert">{{ alertText }}
            <v-btn color="indigo" text
            @click="showAlert = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'newPost',
    data: () => ({
      showAlert: false,
      alertText: '',
      items: ['Finance', 'Sports', 'Business', 'Food', 'Movies', 'Fitness', 'Travel', 'Entertainment'],
      //rules: [ value => !!value || 'Required.' ],
      blogPost: {
        id: new Date().getTime(),
        title: '',
        description: '',
        categories: [],
        isPublic: true,
      }
    }),

    methods: {
      ...mapActions(['addPost']),
      onAddPostClick(){
        this.addPost(this.blogPost);
        this.blogPost = {
          id: new Date().getTime(),
          title: '',
          description: '',
          categories: [],
          isPublic: true};
        
        this.showAlert = true,
        this.alertText = 'Post created successfully'
        //if(this.$ref.addpostForm.validate()){ this.addPost(this.blogPost)}
      }
    }
  }
</script>