
<template>
  <header>
    <NuxtLink :to="'#'" title="Voltar à página inicial"><h1>OKDOKEY</h1></NuxtLink>
    <NavComponents/>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//components
import NavComponents from "./NavComponents.vue";

export default defineComponent({
  name: 'Header',
  components: {NavComponents},
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px #00000030;
    height: 80px;
    width: 100%;
    padding: 12px 24px;
  }

  header a:has(h1) {
    color: initial;
    text-decoration: none;
  }

  header h1 {
    font-family: var(--font-paragraph);
    font-weight: bold;
  }
</style>