<template>
  <div class="privacy">
    <section class="step step-1">
      <h1>Protegendo Sua Privacidade Online</h1>
      <p>Conheça as melhores práticas para garantir sua privacidade online e proteger suas informações pessoais.</p>
    </section>

    <section class="step step-2">
      <h2>Gerenciamento de Configurações de Privacidade</h2>
      <p>Para garantir que suas informações pessoais estejam seguras, é importante ajustar as configurações de privacidade nos aplicativos e redes sociais que você usa.</p>
      <ul>
        <li>Revise e ajuste as configurações de privacidade em redes sociais como Facebook e Instagram.</li>
        <li>Verifique as permissões de aplicativos e serviços para garantir que apenas informações necessárias sejam compartilhadas.</li>
      </ul>
    </section>

    <section class="step step-3">
      <h2>Proteção de Dados Pessoais</h2>
      <p>Proteger seus dados pessoais é essencial para manter sua privacidade online:</p>
      <ul>
        <li>Use senhas fortes e ative a autenticação de dois fatores para suas contas.</li>
        <li>Evite compartilhar informações sensíveis como números de cartão de crédito e endereço a menos que seja absolutamente necessário.</li>
      </ul>
    </section>

    <section class="step step-4">
      <h2>Navegação e Cookies</h2>
      <p>Os cookies podem ser usados para rastrear sua atividade online. Aqui estão algumas dicas para gerenciar cookies e proteger sua privacidade:</p>
      <ul>
        <li>Revise e gerencie as configurações de cookies no seu navegador.</li>
        <li>Considere usar o modo de navegação anônima para limitar o rastreamento.</li>
      </ul>
    </section>

    <section class="step step-5">
      <h2>Segurança em Dispositivos</h2>
      <p>Proteger seus dispositivos é crucial para manter sua privacidade:</p>
      <ul>
        <li>Proteja seus dispositivos com senhas, biometria e software de segurança.</li>
        <li>Certifique-se de manter seu sistema operacional e aplicativos atualizados.</li>
      </ul>
    </section>

    <section class="step step-6">
      <h2>Educação Contínua</h2>
      <p>Fique informado sobre as melhores práticas para proteger sua privacidade online:</p>
      <ul>
        <li>Mantenha-se atualizado sobre novas ameaças e práticas recomendadas.</li>
        <li>Participe de comunidades online que discutem privacidade e segurança.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView',
};
</script>

<style scoped>
  .privacy {
    padding: 2rem;
    max-width: 1200px;
    margin: 5rem auto;
    position: relative;
    min-height: 100vh;
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
  }

  .step:nth-of-type(odd) {
    margin-left: 0;
    float: right;
  }

  .step:nth-of-type(even) {
    float: left;
    margin-left: 1px;
  }

  .privacy::before {
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
  }

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;
  }

  ul {
    list-style-type: disc;
    padding-left: 2rem;
    font-size: 1.2rem;
    text-align: justify;
  }

@media (max-width: 768px) {
  .privacy {
    padding: 1rem;
    margin: 2rem auto;
  }

  .step {
    width: 100%;
    float: none;
    margin-left: 0;
    margin-right: 0;
  }

  .step:nth-of-type(odd),
  .step:nth-of-type(even) {
    margin-left: 0;
    margin-right: 0;
  }

  .privacy::before {
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
  .privacy {
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

