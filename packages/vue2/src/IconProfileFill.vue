<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path d="M11.9999 2.6001C8.90711 2.6001 6.3999 5.1073 6.3999 8.2001C6.3999 11.2929 8.90711 13.8001 11.9999 13.8001C15.0927 13.8001 17.5999 11.2929 17.5999 8.2001C17.5999 5.1073 15.0927 2.6001 11.9999 2.6001Z" fill="#212124"/>
<path d="M11.9999 14.6001C6.80842 14.6001 3.3999 17.4293 3.3999 21.2001C3.3999 21.5315 3.66853 21.8001 3.9999 21.8001H19.9999C20.3313 21.8001 20.5999 21.5315 20.5999 21.2001C20.5999 17.4293 17.1914 14.6001 11.9999 14.6001Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconProfileFill',
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
