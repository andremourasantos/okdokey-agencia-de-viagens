<template>
  <div id="newsletter-card">
    <section>
      <img src="~/assets/ilustrations/mail-box.png" height="48" width="48">
      <div>
        <p><strong>Fique por dentro dos nossos rolês!</strong></p>
        <p>Assine nossa newsletter e seja um dos primeiros a ser notificado de novas vagas!</p>
      </div>
    </section>
    
    <section id="form">
      <form @submit.prevent="subscribedToNewsletter">
        <input type="email" name="email" id="email" placeholder="Seu endereço de e-mail" required>
        <Button :button-text="'Inscrever-me'" />
      </form>
      <p>Ao increver-se, você concorda com a nossa Política de Privacidade e consente com o recebimento de conteúdo publicitário.</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//components
import Button from './Button.vue';

export default defineComponent({
  name: 'NewsletterForm',
  components: {Button},
  setup () {

    const subscribedToNewsletter = () => {
      alert('Inscrito, com sucesso! (mensagem de exibição)')
    }

    return {
      subscribedToNewsletter
    }
  }
})
</script>

<style scoped>
  #newsletter-card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 450px;
    background-color: #f5f5f5;
    padding: 24px;
    border-radius: 24px;
  }

  div > section:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  div > section:nth-of-type(1) img {
    filter: drop-shadow(4px 4px 2px #00000030);
  }
  
  div > section:nth-of-type(1) > div p strong {
    font-family: var(--font-title);
    font-size: 18px;
  }

  div > section:nth-of-type(1) > div p:nth-of-type(2) {
    font-size: 14px;
  }

  #form form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  #form form input {
    height: 42px;
    border-radius: 8px;
    padding: 8px;
    border: 2px solid #9747FF;
  }

  #form form button {
    width: 100%;
    margin-bottom: 16px;
  }
  #form > p {
    font-size: 12px;
  }
</style>