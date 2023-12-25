<template>
  <div class="card">
    <div class="info">
      <div>
        <h3>Salto de paraquedas #119</h3>
        <p class="price">A partir de R$ 1.299,99 <span>x10 sem juros!</span></p>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptate dolore ullam vero iste officiis.</p>
    </div>
    <div class="navbar">
      <PhCaretCircleLeft :size="52" color="white" weight="fill" class="ph-icon-btn"/>
      <Button :button-text="'Participe'" />
      <PhCaretCircleRight :size="52" color="white" weight="fill" class="ph-icon-btn"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PhCaretCircleLeft, PhCaretCircleRight } from '@phosphor-icons/vue';

//components
import Button from './Button.vue';

export default defineComponent({
  name: 'TripCard',
  components: {PhCaretCircleLeft, PhCaretCircleRight, Button},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    height: 80%;
    max-height: 550px;
    min-height: fit-content;
    width: 100%;
    max-width: 412px;
    aspect-ratio: 3/4;
    background: #BE7F46 url('../assets/hero_photo_optz.jpg') center;
    background-size: cover;
    color: white;
    padding: 20px 40px;
    border-radius: 60px;
    border: 5px solid var(--color-accent);
    overflow: hidden;
  }

  .card::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg, transparent 50%, #000000 90%);
  }

  .card > * {
    z-index: 1;
  }

  h3 {
    color: white;
    font-size: 28px;
  }

  p.price {
    font-size: 14px;
    font-family: var(--font-title);
  }

  p.price span {
    font-family: var(--font-paragraph);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .navbar {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  .navbar button {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .card {
      height: initial;
    }
  }

  @media screen and (max-width: 425px) {
    .card {
      height: 100vh;
      padding: 20px;
      border-radius: 40px;
    }
  }
</style>