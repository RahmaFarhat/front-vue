<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="Login">
      <div class="form-group">
        <label>Email address:</label>
        <input type="email" v-model="email" class="form-control form-control-lg" required />
        <div v-if="emailError" style="color: red">{{ emailError }}</div>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" class="form-control form-control-lg" required />
        <div v-if="passwordError" style="color: red">{{ passwordError }}</div>
      </div>
      <center>
        <button type="submit" class="btn btn-dark btn-lg btn-block"> Login</button>
      </center>
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
      emailError: '', // Variable pour stocker le message d'erreur pour l'email
      passwordError: '', // Variable pour stocker le message d'erreur pour le mot de passe
    };
  },
  methods: {
    async Login() {
      try {
        const response = await axios.post('http://localhost:8000/users/login', {
          email: this.email,
          password: this.password,
        });
        // Stocker le token d'accès dans le localStorage
        localStorage.setItem('access_token', response.data.token);
        // Rediriger vers une page sécurisée
        this.$router.push('/menu');
      } catch (error) {
        this.emailError = ''; // Réinitialiser les erreurs d'email
        this.passwordError = ''; // Réinitialiser les erreurs de mot de passe

        if (error.response.data.emailError) {
          this.emailError = error.response.data.emailError;
        }

        if (error.response.data.passwordError) {
          this.passwordError = error.response.data.passwordError;
        }

        console.error(error.response.data);
      }
    },
  },
};
</script>
