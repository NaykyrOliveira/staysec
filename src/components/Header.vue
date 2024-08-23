<template>
  <header class="header">
    <div class="logo">
      <div class="icon">
        <font-awesome-icon :icon="faShieldAlt" />
      </div>
      <h1>StaySec Inc.</h1>
    </div>
    <nav class="navigation">
      <button class="menu-toggle" @click="toggleMenu">
        <font-awesome-icon :icon="faBars" />
      </button>
      <div :class="{ 'navigation-menu': true, 'is-active': isMenuActive }">
        <router-link to="/" exact @click="closeMenu">Home</router-link>
        <router-link to="/introduction" @click="closeMenu">Introdução</router-link>
        <router-link to="/threats" @click="closeMenu">Ameaças</router-link>
        <router-link to="/protection" @click="closeMenu">Proteção de Contas</router-link>
        <router-link to="/navigation" @click="closeMenu">Navegação Segura</router-link>
        <router-link to="/privacy" @click="closeMenu">Privacidade</router-link>
        <router-link to="/about" @click="closeMenu">Sobre</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShieldAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const isMenuActive = ref(false);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const closeMenu = () => {
      isMenuActive.value = false;
    };

    return {
      faShieldAlt,
      faBars,
      isMenuActive,
      toggleMenu,
      closeMenu
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  font-size: 3rem;
  margin-bottom: 0.1rem;
  color: #ffffff; 
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff; 
}

.navigation {
  display: flex;
  align-items: center;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #ffffff; 
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
}

.navigation-menu {
  display: flex;
  gap: 1.5rem;
}

.navigation-menu a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.navigation-menu a:hover {
  color: #4293b9;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navigation-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0;
    background-color: #f3f3f3;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    border-radius: 0 0 1rem 1rem;
  }

  .navigation-menu.is-active {
    display: flex;
  }

  .navigation-menu a {
    margin: 0.5rem 0;
    color: #333;

  }
}
</style>
