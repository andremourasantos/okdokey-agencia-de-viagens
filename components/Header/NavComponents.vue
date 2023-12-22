<template>
  <div>
    <nav>
      <NuxtLink class="show-pc" :to="'#'" title="Rolês em destaque">Rolês em destaque</NuxtLink>
      <NuxtLink class="show-pc" :to="'#'" title="Sobre nós">Sobre nós</NuxtLink>
      <NuxtLink class="show-pc" :to="'#'" title="FAQ">FAQ</NuxtLink>
    </nav>
    <Button class="show-tablet-pc" :button-text="'Participe'" />
    <PhList class="ph-icon-btn show-mobile-tablet" :size="42"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PhList } from '@phosphor-icons/vue';

//components
import Button from '../Button.vue';

export default defineComponent({
  name: 'NavComponents',
  components: {Button, PhList},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  div, nav {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  nav a {
    color: initial;
    text-decoration: none;
    transition: 100ms;
  }

  nav a:hover {
    text-decoration: underline;
  }

  .show-mobile-tablet {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .show-pc {
      display: none;
    }

    .show-mobile-tablet {
      display: block;
    }
  }

  @media screen and (max-width: 425px) {
    .show-tablet-pc {
      display: none;
    }
  }
</style>