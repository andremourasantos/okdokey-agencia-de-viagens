<template>
  <button :class="{
    secondary: buttonType === 'Secondary'
  }">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    buttonText: {
      required: true,
      type: String,
    },
    buttonType: {
      required: false,
      type: String as () => 'Primary' | 'Secondary',
      default: 'Primary'
    }
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
  button {
    height: 42px;
    width: fit-content;
    padding: 12px 24px;
    color: black;
    background-color: var(--color-accent);
    font-weight: bold;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 2px 2px 5px #00000015;
    transition: 250ms;
  }

  button.secondary {
    background-color: white;
  }

  button:hover {
    background-color: var(--color-accent_darker);
  }

  button:active {
    transform: scale(0.95);
  }
</style>