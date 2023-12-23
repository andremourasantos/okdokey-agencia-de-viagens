<template>
  <footer>
    <section>
      <div id="footer">
        <p>OKDOKEY</p>
        <section id="links">
          <article>
            <p><strong>Navegação</strong></p>
            <NuxtLink to="#">Rolês em destaque</NuxtLink>
            <NuxtLink to="#">Sobre nós</NuxtLink>
            <NuxtLink to="#">FAQ</NuxtLink>
          </article>
          
          <article>
            <p><strong>Redes sociais</strong></p>
            <NuxtLink to="#">Instagram</NuxtLink>
            <NuxtLink to="#">TikTok</NuxtLink>
            <NuxtLink to="#">Facebook</NuxtLink>
          </article>
          
          <article>
            <p><strong>Ajuda</strong></p>
            <p>Telefone: (00) 90000-0000</p>
            <p>E-mail: contato@exemplo.com.br</p>
            <NuxtLink to="#">WhatsApp</NuxtLink>
            <NuxtLink to="#">Política de Privacidade</NuxtLink>
          </article>
        </section>
      </div>

      <NewsletterForm/>
    </section>

    <section>
      <p>Criado por <a href="https://andremourasantos.com.br" target="_blank">André Moura Santos</a>.</p>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//compontens
import NewsletterForm from './NewsletterForm.vue';

export default defineComponent({
  name: 'Footer',
  components: {NewsletterForm},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    padding: 80px;
  }

  footer section:nth-of-type(1) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1200px) {
    #footer {
      order: 2;
    }
  }

  @media screen and (max-width: 768px) {
    footer {
      padding: 40px;
    }

    #footer > p {
      text-align: center;
    }
  }

  @media screen and (max-width: 425px) {
    #links {
      column-gap: 32px !important;
    }
  }

  #footer {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  #footer > p {
    font-size: 32px;
    font-weight: bold;
  }

  #links {
    display: flex;
    align-items: flex-start;
    gap: 64px;
  }

  #links article {
   display: flex;
   flex-direction: column;
   gap: 8px; 
  }

  #links a {
    width: fit-content;
  }

  footer section:nth-of-type(2) p {
    width: 100%;
    text-align: center;
    margin: auto;
  }
</style>