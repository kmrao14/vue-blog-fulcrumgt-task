import axios from 'axios'

const state = {
    posts: []
};

const getters = {
    allPosts : (state) => state.posts,
    activePosts: (state) => state.posts.filter(post => post.isPublic),
    getPostById: (state) => (id) => state.posts.find(post => post.id == id)
};

const actions = {
    async fetchPosts({ commit }){
        const response = await axios.get('/posts.json');
        commit('SET_POSTS', response.data);
    },

    addPost({ commit }, postData){
        commit('NEW_POST', postData);
    },

    editPost({ commit }, updatedData){
        commit('UPDATE_POST', updatedData);
    },

    deletePost({ commit }, postId){
        commit('DELETE_POST', postId);
    }

};

const mutations = {
    SET_POSTS: (state, posts) => (state.posts = posts),
    NEW_POST: (state, post) => state.posts.unshift(post),
    UPDATE_POST: (state, post) => state.posts.forEach(item=> {
        if(item.id==post.id){    
            item = post;
            return
            }
    }),

    DELETE_POST: (state, postId) => state.posts.forEach((item, index) => {
        if(item.id == postId){
            state.posts.splice(index, 1);
            return
        }
    })
    
};

export default {
    state,
    getters,
    actions,
    mutations
}