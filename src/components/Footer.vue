<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} StaySec. Todos os direitos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  export default {
    name: 'Footer',
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        currentYear: new Date().getFullYear(),
      }
    },
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
    text-align: center;
    margin-top: 10rem;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer p {
    margin: 0;
    font-size: 0.875rem;
  }
  </style>
  