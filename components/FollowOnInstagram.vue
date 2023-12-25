<template>
  <section class="secondary">
    <div>
      <h2>Siga-nos no Instagram!</h2>
      <p>Fique por dentro dos próximos rolês e prepare-se com a gente!</p>
    </div>
    <Button :button-text="'Siga-nos agora!'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//components
import Button from './Button.vue';

export default defineComponent({
  name: 'FollowOnInstagram',
  components: {Button},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 33vh;
    min-height: 250px;
    text-align: center;
    padding: 0px 40px;
  }

  section h2 {
    font-size: 42px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 425px) {
    section {
      height: fit-content;
      padding: 80px 40px;
    }
  }
</style>