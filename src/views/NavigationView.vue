<template>
  <div class="navigation">
    <section class="step step-1">
      <h1>Navegação Segura na Internet</h1>
      <p>Conheça as melhores práticas para garantir uma navegação segura e proteger sua privacidade online.</p>
    </section>

    <section class="step step-2">
      <h2>Usando Navegadores Seguros</h2>
      <p>Escolher um navegador seguro é crucial para proteger sua privacidade e segurança online.</p>
      <ul>
        <li>Considere usar navegadores como Mozilla Firefox, Brave ou Google Chrome.</li>
        <li>Ajuste as configurações de segurança do seu navegador:</li>
        <ul>
          <li>Bloqueie cookies de terceiros.</li>
          <li>Ative o modo de navegação privada.</li>
          <li>Instale extensões de segurança, como bloqueadores de anúncios e rastreadores.</li>
        </ul>
      </ul>
    </section>

    <section class="step step-3">
      <h2>Identificando Sites Seguros</h2>
      <p>Certifique-se de que os sites que você visita são seguros:</p>
      <ul>
        <li>Verifique o cadeado verde na barra de endereços e o prefixo `https://`.</li>
        <li>Desconfie de URLs estranhas e erros de certificado.</li>
        <li>Evite sites que pareçam suspeitos ou que tenham uma aparência amadora.</li>
      </ul>
    </section>

    <section class="step step-4">
      <h2>Cuidado com Links e Downloads</h2>
      <p>Proteja-se contra ameaças ao clicar em links e fazer downloads:</p>
      <ul>
        <li>Não clique em links desconhecidos ou recebidos por e-mail.</li>
        <li>Garanta que os downloads sejam feitos de fontes confiáveis.</li>
        <li>Verifique a integridade dos arquivos antes de abri-los.</li>
      </ul>
    </section>

    <section class="step step-5">
      <h2>Uso de VPN</h2>
      <p>Uma VPN pode proteger sua navegação e garantir sua privacidade:</p>
      <ul>
        <li>Uma VPN (Rede Privada Virtual) criptografa sua conexão e oculta seu endereço IP.</li>
        <li>Escolha um serviço de VPN confiável e configure-o corretamente.</li>
      </ul>
    </section>

    <section class="step step-6">
      <h2>Educação Contínua</h2>
      <p>Mantenha-se informado sobre as melhores práticas de segurança:</p>
      <ul>
        <li>Fique atualizado sobre novas vulnerabilidades e práticas recomendadas.</li>
        <li>Participe de comunidades online que discutem segurança e privacidade.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NavigationView',
};
</script>

<style scoped>
  .navigation {
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
    margin-left: 1px;
    float: left;
  }

  .navigation::before {
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
  }

@media (max-width: 768px) {
  .navigation {
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

  .navigation::before {
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
  .navigation {
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

