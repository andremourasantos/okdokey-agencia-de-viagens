<template>
  <section>
    <div class="column">
      <h2>Próximos rolês</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ab suscipit debitis omnis in cumque beatae et illum, itaque, facere dolorum fugiat alias perferendis quos voluptatem quidem eligendi natus modi?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque nam quo minus possimus voluptatum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eaque nam quo minus possimus voluptatum!</p>
    </div>
    <div class="column">
      <TripCard/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//components
import TripCard from './TripCard.vue';

export default defineComponent({
  name: 'NextTrip',
  components: {TripCard},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  section {
    position: relative;
    display: flex;
    gap: 64px;
    height: 100dvh;
    min-height: calc(fit-content + 80px);
    width: 100%;
  }

  .column {
    width: 100%;
  }

  .column:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
  }

  .column:nth-of-type(1) h2 {
    margin-bottom: 16px;
  }

  .column:nth-of-type(1) p {
    margin-bottom: 8px;
  }

  .column:nth-of-type(1) p:nth-last-of-type(1) {
    margin-bottom: 0px;
  }

  .column:nth-of-type(2) {
    display: grid;
    place-items: center;
    padding: 0px 40px;
  }

  @media screen and (max-width: 768px) {
    section {
      flex-direction: column;
      height: fit-content;
      padding: 40px;
    }

    .column:nth-of-type(1) {
      text-align: center;
    }

    h2 {
      margin-inline: auto;
    }
  }

  @media screen and (max-width: 425px) {
    section {
      padding: 40px 0px 80px 0px;
    }
  }
</style>