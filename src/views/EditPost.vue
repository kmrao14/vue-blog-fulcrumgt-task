<template>
    <div class="editPost">
        <v-container>  
            <h1>Edit Post</h1>
            <v-divider></v-divider>
            <v-form ref="addpostForm">
                <v-text-field
                  label="Title"
                  v-model="getPostById.title" 
                  :rules="rules"
                  filled
                  required></v-text-field>

                <v-textarea 
                  label="Description"
                  v-model="getPostById.description" 
                  :rules="rules"
                  filled
                  required></v-textarea>

                <v-select 
                  label="Category" 
                  v-model="getPostById.categories"
                  :items="items"  
                  :rules="rules"
                  multiple 
                  filled
                  required></v-select>

                <v-switch 
                  label="Is Publish"
                  v-model="getPostById.isPublic"
                  :rules="rules"></v-switch>  

                <v-btn large color="primary" @click="onUpdatePostClick()">Update Post</v-btn>
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
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'editPost',
    data(){
        return {
            id: parseInt(this.$route.params.id),  
            showAlert: false,
            alertText: '',
            items: ['Finance', 'Sports', 'Business', 'Food', 'Movies', 'Fitness', 'Travel', 'Entertainment'],
            //rules: [value => !!value || 'Required.']
        }
    },

    methods: {
      ...mapActions(['editPost']),
      onUpdatePostClick(){
        this.editPost(this.getPostById);
        this.showAlert = true,
        this.alertText = 'Post Updated successfully'
        //if(this.$ref.addpostForm.validate()){ this.addPost(this.blogPost)}
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