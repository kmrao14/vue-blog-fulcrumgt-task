<template>
  <v-app>
    <Header />    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Header from './components/layout/Header'


export default {
  name: 'App',
  components: {
    Header
    //HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
