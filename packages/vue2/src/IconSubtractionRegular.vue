<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.19995 12C2.19995 11.5581 2.55812 11.2 2.99995 11.2H21C21.4418 11.2 21.7999 11.5581 21.7999 12C21.7999 12.4418 21.4418 12.8 21 12.8H2.99995C2.55812 12.8 2.19995 12.4418 2.19995 12Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconSubtractionRegular',
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
