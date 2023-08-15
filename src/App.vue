<template>
  <div class="vue-template">
    <div>
      <button @click="fetchData">Fetch Data</button>
      <div v-if="data">{{ data }}</div>
    </div>

    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.insteadsoftware.com/" target="_blank"> Instead </a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/login"> Log in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">Sign in</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null
    };
  },
  methods: {
    fetchData() {
      axios.get('/users/register')
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
