<template lang="html">
  <div class="posts">
    <Navbar></Navbar>
      <div class="container">
        <div class="row">
          <div v-for="posts in APIData" :key="posts.id" class="">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://via.placeholder.com/150x100" alt="card-img">
                </figure>
              </div>
              <div class="card-content">
                <h4> <a href="" class="text-secondary"></a> {{posts.title}} </h4>
                <p class="card-text">{{posts.content}}</p>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">Save</a>
                  <a href="#" class="card-footer-item">Edit</a>
                  <a href="#" class="card-footer-item">Delete</a>
                  <small class="text-muted">9 mins</small>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import {getAPI} from '../axios-api'

export default {
  name: 'Posts',

  data(){
    return{
      APIData: [],
    }
  },

  components:{
    Navbar
  },

  created(){
    getAPI.get('/posts/',)
      .then(response => {
        console.log('Post API has recived data')
        this.APIData = response.data
      })
      .catch(err => {
        console.log(err);
      })
  }

}
</script>

<style lang="css" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
