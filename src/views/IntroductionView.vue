<template>
  <div class="introduction">
    <section class="step step-1">
      <h1>Introdução à Segurança e Privacidade Online</h1>
      <p>Bem-vindo ao StaySec! Nesta seção, vamos explorar os fundamentos da segurança e privacidade online. Com a crescente dependência da internet em nossas vidas diárias, entender como proteger suas informações pessoais e manter sua segurança online é essencial.</p>
    </section>

    <section class="step step-2">
      <h2>Por que a Segurança Online é Importante?</h2>
      <p>A segurança online é crucial porque nos protege contra uma variedade de ameaças, incluindo ataques de phishing, malware e fraudes. Estes ataques podem resultar em roubo de informações pessoais, financeiros e danos à sua reputação. Por exemplo, um ataque de phishing pode levar você a clicar em um link falso e fornecer suas informações pessoais para golpistas.</p>
    </section>

    <section class="step step-3">
      <h2>O Que é Privacidade Online?</h2>
      <p>Privacidade online refere-se à proteção das suas informações pessoais e dados enquanto você navega na internet. Manter sua privacidade é importante para evitar que suas informações sejam coletadas e usadas sem o seu consentimento. Isso inclui a proteção contra rastreamento online, coleta de dados pessoais e uso indevido das suas informações.</p>
    </section>

    <section class="step step-4">
      <h2>Como Começar a Se Proteger Online</h2>
      <p>Para começar a se proteger online, siga estas dicas:</p>
      <ul>
        <li><strong>Criar Senhas Fortes:</strong> Use combinações de letras, números e caracteres especiais para criar senhas seguras.</li>
        <li><strong>Usar Autenticação de Dois Fatores:</strong> Adicione uma camada extra de segurança às suas contas com autenticação de dois fatores.</li>
        <li><strong>Manter Software Atualizado:</strong> Certifique-se de que seu sistema operacional, aplicativos e antivírus estejam sempre atualizados.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
};
</script>

<style scoped>
.wrapper {
  position: relative;
  min-height: 100vh; 
}

.introduction {
  padding: 2rem;
  max-width: 1200px;
  margin: 5% auto;
  position: relative;
  overflow: hidden; 
}

.step {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  width: calc(50% - 0px);
  margin-bottom: 4rem;
  color: #333;
  text-align: center;
  float: left;
}

.step:nth-of-type(odd) {
  margin-left: 50%;
}

.step:nth-of-type(even) {
  clear: both;
  margin-right: 50%;
}

.introduction::before {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #333;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: -1;
}

.step:nth-of-type(odd)::after,
.step:nth-of-type(even)::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
}

.step:nth-of-type(odd)::after {
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
}

.step:nth-of-type(even)::after {
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

h2 {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
  line-height: 1.5;
  text-align: left;
  font-size: 1.2rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .introduction {
    padding: 1rem;
    margin: 2% auto;
  }

  .step {
    width: 100%;
    float: none;
    margin-left: 0;
    margin-right: 0;
  }

  .step:nth-of-type(odd) {
    margin-left: 0;
  }

  .step:nth-of-type(even) {
    margin-right: 0;
  }

  .introduction::before {
    left: 0;
    width: 100%;
    height: 2px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  ul {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .introduction {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }

  ul {
    font-size: 0.875rem;
  }
}
</style>
