<template>
  <div class="protection">
    <section class="step step-1">
      <h1>Protegendo Suas Contas Online</h1>
      <p>Aprenda a proteger suas contas online com práticas recomendadas de segurança e dicas essenciais para manter suas informações seguras.</p>
    </section>

    <section class="step step-2">
      <h2>Criando Senhas Fortes</h2>
      <p>Uma senha forte é essencial para proteger suas contas online. Aqui estão algumas dicas:</p>
      <ul>
        <li>Use pelo menos 12 caracteres.</li>
        <li>Inclua uma combinação de letras maiúsculas, minúsculas, números e símbolos.</li>
        <li>Evite usar informações pessoais facilmente acessíveis.</li>
      </ul>
      <p>Exemplo de senha forte: <code>G7!n7l3#Rt@xLq9Z</code></p>
      <p>Considere usar um gerenciador de senhas para criar e armazenar senhas seguras.</p>
    </section>

    <section class="step step-3">
      <h2>Autenticação de Dois Fatores (2FA)</h2>
      <p>A autenticação de dois fatores adiciona uma camada extra de segurança ao exigir um segundo fator além da senha.</p>
      <p>Como configurar 2FA:</p>
      <ol>
        <li>Acesse as configurações de segurança da sua conta.</li>
        <li>Escolha a opção para ativar a autenticação de dois fatores.</li>
        <li>Selecione um método de 2FA, como um aplicativo de autenticação ou mensagens SMS.</li>
        <li>Siga as instruções para concluir a configuração.</li>
      </ol>
      <p>Aplicativos recomendados: Google Authenticator, Authy, Microsoft Authenticator.</p>
    </section>

    <section class="step step-4">
      <h2>Gerenciamento de Senhas</h2>
      <p>Evite reutilizar senhas em diferentes sites e serviços. Utilize um gerenciador de senhas para manter suas senhas seguras e organizadas.</p>
    </section>

    <section class="step step-5">
      <h2>Dicas Adicionais</h2>
      <ul>
        <li>Atualize suas senhas regularmente.</li>
        <li>Cuidado com e-mails e links suspeitos.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProtectionView',
};
</script>

<style scoped>
  .protection {
    padding: 2rem;
    max-width: 1200px;
    margin: 5% auto;
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
    margin-left: 1px;
    float: left;
  }

  .protection::before {
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

  ol {
    margin-left: 2rem;
    font-size: 1.2rem;
    text-align: justify;
  }

  code {
    background-color: #1e5e23;
    padding: 0.2rem 0.4rem;
    color: #fff;
    border-radius: 4px;
  }

@media (max-width: 768px) {
  .protection {
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

  .protection::before {
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

  ul,
  ol {
    font-size: 1rem;
  }

  code {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .protection {
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

  ul,
  ol {
    font-size: 0.875rem;
  }

  code {
    font-size: 0.75rem;
  }
}
</style>
