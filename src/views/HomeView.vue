<template>
  <div class="home">
    <h1>Bem-vindo ao StaySec</h1>
    <p>Explore nossos recursos para melhorar sua segurança online e proteger sua privacidade.</p>
    
    <div class="cards">
      <router-link to="/introduction" class="card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'book-open']" />
        </div>
        <div class="card-content">
          <h2>Introdução</h2>
          <p>Saiba mais sobre o básico da segurança cibernética e como começar a proteger suas informações.</p>
        </div>
      </router-link>

      <router-link to="/threats" class="card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
        </div>
        <div class="card-content">
          <h2>Ameaças</h2>
          <p>Entenda os diferentes tipos de ameaças online e como identificá-las.</p>
        </div>
      </router-link>

      <router-link to="/protection" class="card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'shield-alt']" />
        </div>
        <div class="card-content">
          <h2>Proteção de Contas</h2>
          <p>Aprenda como proteger suas contas e dados pessoais contra ataques.</p>
        </div>
      </router-link>

      <router-link to="/navigation" class="card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'globe']" />
        </div>
        <div class="card-content">
          <h2>Navegação Segura</h2>
          <p>Descubra práticas para garantir uma navegação segura na internet.</p>
        </div>
      </router-link>

      <router-link to="/privacy" class="card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'lock']" />
        </div>
        <div class="card-content">
          <h2>Privacidade</h2>
          <p>Proteja suas informações pessoais e mantenha sua privacidade online.</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen, faExclamationTriangle, faShieldAlt, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'HomeView',
  components: {
    FontAwesomeIcon
  },
  setup() {
    return {
      faBookOpen,
      faExclamationTriangle,
      faShieldAlt,
      faGlobe,
      faLock
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
  margin: 2% auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #8f8f8f, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 6rem;
}


p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #7c7c7c;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #000;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  border: 1px solid #ddd;
  position: relative;
  margin-bottom: 2rem;
  margin-left: 10px; 
}

.card:nth-child(odd) {
  margin-left: calc(10px * var(--step));
}

.card:nth-child(even) {
  margin-left: calc(10px * var(--step));
}

.cards {
  --step: 1;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #4293B9; 
}

.card-content {
  text-align: center;
}

.card-content h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-content p {
  font-size: 1.125rem;
  color: #666;
}
</style>
