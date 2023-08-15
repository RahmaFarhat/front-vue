// import axios from 'axios';

// export default {
//   data() {
//     return {
//       users: [],
//     };
//   },
//   mounted() {
//     axios.get('http://localhost:3000/users')
//       .then(response => {
//         this.users = response.data;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   },




// Dans votre composant Vue.js
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8000/users/login', {
          email: this.email,
          password: this.password,
        });

        // Stocker le token d'accès dans le local storage
        localStorage.setItem('accessToken', response.data.accessToken);

        // Rediriger l'utilisateur vers une page protégée ou faire toute autre action nécessaire après la connexion réussie
      } catch (error) {
        console.error('Erreur lors de la connexion :', error.response.data.message);
        // Afficher un message d'erreur ou effectuer une action appropriée en cas d'erreur d'authentification
      }
    },
  },
};






  
// };
