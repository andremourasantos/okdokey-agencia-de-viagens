<template>
  <Header/>

  <section class="hero-section">
    <article>
      <div>
        <h1>Sinta a emoção de <u>viver</u></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet sunt nihil illo commodi temporibus odit quasi reiciendis natus! Praesentium libero beatae quaerat possimus eum accusamus culpa doloribus voluptatibus expedita!</p>
      </div>
      <div class="hero-section-btns">
        <Button class="show-mobile" :button-text="'Veja o vídeo!'" :button-type="'Secondary'" />
        <Button :button-text="'Participe!'" />
      </div>
    </article>
    <article>
      <HeroVideo/>
    </article>
  </section>

  <section id="scorecards">
    <Scorecards :scorecard-image="'shaking'" :scorecard-title="'+15 mil seguidores'" :scorecard-text="'Anseiam por participar nos rolês!'" />
    <Scorecards :scorecard-image="'passion'" :scorecard-title="'+5 mil pessoas'" :scorecard-text="'Já experienciaram como é viver a vida!'" />
    <Scorecards :scorecard-image="'confetti'" :scorecard-title="'+100 rolês'" :scorecard-text="'Relizados, de todos os tipos e gostos!'" />
    <Scorecards :scorecard-image="'airport'" :scorecard-title="'+5 países'" :scorecard-text="'Não se limite, viva o quanto for necessário!'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    align-items: center;
    justify-content: center;
    position: relative;
    height: calc(100dvh - 80px);
    width: 100%;
    background-image: url('../assets/hero_photo_optz.jpg');
    background-color: orange;
    background-size: cover;
    background-position: center;
    padding: 0px 40px;
  }
  
  .hero-section::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #00000060;
  }

  .hero-section > * {
    color: white;
    z-index: 1;
  }

  .hero-section h1 {
    font-size: 52px;
    margin-bottom: 8px;
  }

  .hero-section article:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: fit-content;
    width: 80%;
    max-width: 500px;
  }

  .hero-section article:nth-of-type(1) u {
    font-family: var(--font-title);
  }

  .hero-section article:nth-of-type(1) :deep(button) {
    padding: 12px 48px;
  }

  .hero-section-btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }

  .hero-section-btns .show-mobile {
    display: none;
  }

  @media screen and (max-height: 768px) and (max-width: 768px) {
    .hero-section {
      height: fit-content !important;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-section {
      grid-template-columns: 1fr;
      height: fit-content;
      padding: 80px 40px;
      gap: 80px;
    }

    .hero-section article:nth-of-type(1) {
      margin: auto;
      align-items: center;
      text-align: center;
    }
    
    .hero-section article:nth-of-type(2) {
      grid-row: 1;
    }

    .hero-section-btns {
      align-items: center;
    }
  }

  @media screen and (max-width: 425px) {
    .hero-section {
      gap: 0px;
      height: calc(100dvh - 80px);
    }

    .hero-section article:nth-of-type(2) {
      display: none;
    }

    .hero-section-btns .show-mobile {
      display: block;
    }
  }

  #scorecards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    #scorecards {
      height: fit-content;
      flex-wrap: wrap;
    }
  }
</style>