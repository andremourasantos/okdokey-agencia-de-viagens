<template>
  <section>
    <div class="column">
      <div>
        <h2>Quem somos</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex amet nisi earum doloribus beatae? Nemo et accusamus, dicta sit voluptas eligendi mollitia maiores eveniet consectetur, dolor maxime perferendis obcaecati incidunt temporibus minima impedit, itaque molestiae beatae! Dicta nulla fugiat voluptate animi error obcaecati id quam quas temporibus, doloribus excepturi?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aspernatur praesentium corrupti nobis tempore quia nemo veniam harum dolorem nihil.</p>
      </div>
    </div>
    <div class="column photos">
      <img src="../assets/crew-photos-1.png">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUs',
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
    width: 100%;
    background-color: #3F4C52;
    background-image: url('../assets/about-us-optz.jpg');
    background-size: cover;
    background-position: center;
  }

  section::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: #00000050;
  }

  section > * {
    z-index: 1;
  }

  .column {
    width: 100%;
  }

  .column:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  .column:nth-of-type(1) div {
    padding: 40px;
    background-color: #FFFFFF05;
    backdrop-filter: blur(15px);
    color: white;
  }

  .column:nth-of-type(1) h2 {
    font-size: 42px;
    color: white;
    margin-bottom: 16px;
  }

  .column:nth-of-type(1) p {
    margin-bottom: 8px;
  }

  .column:nth-of-type(1) p:nth-last-of-type(1) {
    margin-bottom: 0px;
  }

  .column:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column:nth-of-type(2) img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    section {
      flex-direction: column;
      height: fit-content;
      gap: 0px;
      text-align: center;
    }
  }
</style>