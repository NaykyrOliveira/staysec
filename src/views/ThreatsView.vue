<template>
  <div class="threats">
    <section class="threat threat-1">
      <h1>Entendendo as Ameaças Online</h1>
      <p>Conhecer as ameaças cibernéticas é o primeiro passo para se proteger online. Nesta seção, vamos explorar diferentes tipos de ameaças e fornecer dicas para evitá-las.</p>
    </section>

    <section class="threat threat-2">
      <h2>Phishing</h2>
      <p>O phishing é um tipo de ataque em que os golpistas enviam e-mails ou mensagens falsas para enganar você e obter informações pessoais. Eles podem se passar por uma instituição confiável para roubar suas credenciais ou informações financeiras.</p>
      <p><strong>Exemplo:</strong> Você recebe um e-mail dizendo que sua conta bancária foi comprometida e pede para clicar em um link e fornecer suas informações de login.</p>
      <p><strong>Dicas de Proteção:</strong> Verifique sempre o remetente do e-mail, evite clicar em links suspeitos e nunca forneça informações pessoais sem verificar a autenticidade da solicitação.</p>
    </section>

    <section class="threat threat-3">
      <h2>Vishing (Phishing por Voz)</h2>
      <p>O vishing é uma forma de phishing realizada por telefone. Os golpistas se passam por representantes de empresas ou instituições para obter informações confidenciais através de chamadas telefônicas.</p>
      <p><strong>Exemplo:</strong> Você recebe uma ligação dizendo que seu cartão de crédito está bloqueado e pede para confirmar seus dados pessoais para desbloqueá-lo.</p>
      <p><strong>Dicas de Proteção:</strong> Nunca forneça informações pessoais por telefone sem confirmar a identidade da pessoa e sempre ligue diretamente para a empresa usando um número oficial.</p>
    </section>

    <section class="threat threat-4">
      <h2>Engenharia Social</h2>
      <p>A engenharia social é uma técnica em que os golpistas manipulam você para obter informações pessoais ou acessar sistemas seguros. Eles utilizam truques psicológicos para enganar suas vítimas.</p>
      <p><strong>Exemplo:</strong> Um golpista se faz passar por um técnico de TI e pede para você fornecer suas credenciais para "verificar" seu computador.</p>
      <p><strong>Dicas de Proteção:</strong> Desconfie de solicitações inesperadas de informações e sempre verifique a identidade do solicitante antes de fornecer qualquer dado.</p>
    </section>

    <section class="threat threat-5">
      <h2>Golpes de Trabalho Online</h2>
      <p>Com o aumento do trabalho remoto, golpes relacionados a ofertas de trabalho se tornaram mais comuns. Os golpistas prometem empregos fáceis e bem remunerados, muitas vezes pedindo pagamento adiantado ou informações pessoais.</p>
      <p><strong>Exemplo:</strong> Você vê um anúncio de trabalho que promete um salário alto para um trabalho simples, mas pede para pagar uma taxa de inscrição antes de começar.</p>
      <p><strong>Dicas de Proteção:</strong> Pesquise a empresa antes de aceitar qualquer oferta e nunca pague dinheiro adiantado para obter um emprego.</p>
    </section>

    <section class="threat threat-6">
      <h2>Recomendações Online e Aplicativos</h2>
      <p>Alguns aplicativos e jogos recomendados online podem conter malware ou ser inseguros. É importante verificar a segurança de aplicativos e jogos antes de baixá-los.</p>
      <p><strong>Exemplo:</strong> Você encontra um aplicativo popular que promete funcionalidades incríveis, mas ele pode estar coletando suas informações pessoais sem o seu conhecimento.</p>
      <p><strong>Dicas de Proteção:</strong> Baixe aplicativos apenas de fontes confiáveis e leia as avaliações antes de instalar qualquer software.</p>
    </section>

    <section class="threat threat-7">
      <h2>Propostas de PIX</h2>
      <p>Os golpes envolvendo propostas de PIX geralmente prometem retornos financeiros em troca de um depósito inicial. Esses golpes são frequentemente falsos e projetados para roubar seu dinheiro.</p>
      <p><strong>Exemplo:</strong> Você recebe uma proposta prometendo altos retornos em um investimento se você transferir um valor inicial via PIX.</p>
      <p><strong>Dicas de Proteção:</strong> Desconfie de ofertas que prometem retornos rápidos e elevados e nunca transfira dinheiro para estranhos sem verificar a legitimidade da proposta.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Threats',
};
</script>

<style scoped>
  .threats {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto; 
    position: relative;
    min-height: 100vh; 
    overflow: hidden; 
  }

  .threat {
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    width: calc(50% - 0px);
    margin-bottom: 4rem;
    color: #333;
    text-align: center;
    margin-top: 6rem;
  }

  .threat:nth-of-type(odd) {
    margin-left: 0;
    float: right;
  }
  
  .threat:nth-of-type(even) {
    float: left;
    margin-left: 1px;
  }

  .threats::before {
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

  .threat:nth-of-type(odd)::after,
  .threat:nth-of-type(even)::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
  }

  .threat:nth-of-type(odd)::after {
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  .threat:nth-of-type(even)::after {
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
  }

@media (max-width: 768px) {
  .threats {
    padding: 1rem;
    margin: 2rem auto;
  }

  .threat {
    width: 100%;
    float: none;
    margin-left: 0;
    margin-right: 0;
  }

  .threat:nth-of-type(odd),
  .threat:nth-of-type(even) {
    margin-left: 0;
    margin-right: 0;
  }

  .threats::before {
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
  .threats {
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

