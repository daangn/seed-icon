<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.3001 9.74837C21.0334 10.7491 21.0334 13.251 19.3001 14.2517L8.8001 20.3139C7.06677 21.3146 4.9001 20.0637 4.9001 18.0622L4.9001 5.93786C4.9001 3.93638 7.06676 2.68546 8.8001 3.6862L19.3001 9.74837ZM18.7001 13.2125C19.6334 12.6736 19.6334 11.3265 18.7001 10.7876L8.2001 4.72543C7.26677 4.18657 6.1001 4.86014 6.1001 5.93786L6.1001 18.0622C6.1001 19.1399 7.26676 19.8135 8.2001 19.2747L18.7001 13.2125Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconPlayThin',
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
