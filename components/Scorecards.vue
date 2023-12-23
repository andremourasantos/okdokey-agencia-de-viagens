<template>
  <article>
    <img :src="images[scorecardImage]" height="80" width="80">
    <h2>{{ scorecardTitle }}</h2>
    <p>{{ scorecardText }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { filename } from 'pathe/utils';

export default defineComponent({
  name: 'Scorecard',
  props: {
    scorecardTitle: {
      required: true,
      type: String
    },
    scorecardText: {
      required: true,
      type: String
    },
    scorecardImage: {
      required: true,
      type: String as () => 'airport' | 'confetti' | 'favoritos' | 'mail-box' | 'passion' | 'shaking'
    }
  },
  setup () {
    const glob = import.meta.glob('@/assets/ilustrations/*.png', { eager: true });
    const images = Object.fromEntries(
      Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    )

    return {
      images
    }
  }
})
</script>

<style scoped>
  article {
    height: fit-content;
    width: 200px;
    text-align: center;
  }

  img {
    display: block;
    height: 80px;
    width: 80px;
    margin-bottom: 24px;
    margin-inline: auto;
  }

  h2 {
    font-size: 24px;
  }
</style>