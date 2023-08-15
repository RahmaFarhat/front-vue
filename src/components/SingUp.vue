<template>
  <div>
    <h3>Singin</h3>
    <form @submit.prevent="Singin">

      
      <div class="form-group">
        <label>Email address:</label>
        <input type="email" v-model="email" class="form-control form-control-lg" required />

      
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password"  class="form-control form-control-lg" required />
      
      </div>
<br>
     <center>  <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button> </center> 
      <div v-if="errorMessage" style="color: red">{{ errorMessage }}</div>

    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '', // Variable pour stocker le message d'erreur

    };
  },
  methods: {
    async Singin() {
      try {
        const response = await axios.post('http://localhost:8000/users/register', {
          email: this.email,
          password: this.password,
        });
        // Stocker le token d'accès dans le localStorage
        localStorage.setItem('access_token', response.data.token);
        // Rediriger vers une page sécurisée
        this.$router.push('/users/login');
      } catch (error) {
        this.errorMessage = error.response.data.message;
      }
    },
  },
};
</script>
