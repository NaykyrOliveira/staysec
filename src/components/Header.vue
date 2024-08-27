<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <div class="icon">
          <font-awesome-icon :icon="faShieldAlt" />
        </div>
        <h1>StaySec Inc.</h1>
      </div>
      <nav class="navigation">
        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuActive">
          <font-awesome-icon :icon="isMenuActive ? faTimes : faBars" />
          <span class="sr-only">{{ isMenuActive ? 'Fechar' : 'Abrir' }} Menu</span>
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
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShieldAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const isMenuActive = ref(false);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
      document.body.style.overflow = isMenuActive.value ? 'hidden' : '';
    };

    const closeMenu = () => {
      isMenuActive.value = false;
      document.body.style.overflow = '';
    };

    return {
      faShieldAlt,
      faBars,
      faTimes,
      isMenuActive,
      toggleMenu,
      closeMenu
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #1a1a1a;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #4293b9;
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
  transition: color 0.3s ease;
}

.menu-toggle:hover {
  color: #4293b9;
}

.navigation-menu {
  display: flex;
  gap: 1.5rem;
}

.navigation-menu a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.navigation-menu a:hover,
.navigation-menu a.router-link-active {
  color: #4293b9;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    z-index: 1001;
  }

  .navigation-menu {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 26, 26, 0.95);
    padding: 5rem 2rem 2rem;
    z-index: 1000;
  }

  .navigation-menu.is-active {
    display: flex;
  }

  .navigation-menu a {
    font-size: 1.2rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navigation-menu a:last-child {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .logo h1 {
    font-size: 1.2rem;
  }

  .icon {
    font-size: 1.5rem;
  }
}
</style>