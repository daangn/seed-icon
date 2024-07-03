/* eslint-disable */ // @ts-nocheck @ts-ignore
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.67369 3.67369C3.90528 3.4421 4.28076 3.4421 4.51235 3.67369L12 11.1613L19.4876 3.67369C19.7192 3.4421 20.0947 3.4421 20.3263 3.67369C20.5579 3.90528 20.5579 4.28076 20.3263 4.51235L12.8387 12L20.3263 19.4876C20.5579 19.7192 20.5579 20.0947 20.3263 20.3263C20.0947 20.5579 19.7192 20.5579 19.4876 20.3263L12 12.8387L4.51235 20.3263C4.28076 20.5579 3.90528 20.5579 3.67369 20.3263C3.4421 20.0947 3.4421 19.7192 3.67369 19.4876L11.1613 12L3.67369 4.51235C3.4421 4.28076 3.4421 3.90528 3.67369 3.67369Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconCloseThin',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      svg: null as Element | null,
    };
  },
  mounted() {
    this.svg = this.$refs.svg as Element;
  },
};
</script>
