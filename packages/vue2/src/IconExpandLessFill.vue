/* eslint-disable */ // @ts-nocheck @ts-ignore
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.2071 17.2071C20.8166 17.5976 20.1834 17.5976 19.7929 17.2071L12 9.41421L4.20711 17.2071C3.81658 17.5976 3.18342 17.5976 2.79289 17.2071C2.40237 16.8166 2.40237 16.1834 2.79289 15.7929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L21.2071 15.7929C21.5976 16.1834 21.5976 16.8166 21.2071 17.2071Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconExpandLessFill',
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
