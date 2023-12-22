<template>
  <div id="video" title="Ver vídeo">
    <div id="count">
      <p><span>+100</span><br>rolês</p>
    </div>

    <PhPlayCircle id="play-button" class="ph-icon-btn" :size="96" weight="fill"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PhPlayCircle } from '@phosphor-icons/vue';

export default defineComponent({
  name: 'HeroVideo',
  components: {PhPlayCircle},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  #video {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 4/3;
    background-image: url('../assets/video_photo_holder_optz.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 42px;
    border: 8px solid var(--color-accent);
    backdrop-filter: blur(5px);
    margin: auto;
  }

  #video::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 34px;
    background-color: #00000050;
  }

  #count {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 125px;
    width: 125px;
    padding: 24px;
    border-radius: 0px 32px 0px 42px;
    background-color: var(--color-accent);
    font-weight: bold;
    font-size: 20px;
    color: black;
    text-align: center;
  }

  #count span {
    font-family: var(--font-title);
    font-size: 40px;
  }

  #play-button {
    filter: drop-shadow(0px 0px 5px #00000050);
  }

  @media screen and (max-width: 768px) {
    #video {
      width: 80%;
    }
  }

  @media screen and (max-width: 425px) {
    #video {
      display: none;
    }
  }
</style>