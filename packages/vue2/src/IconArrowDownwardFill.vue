<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V17.5858L19.2929 11.2929C19.6834 10.9024 20.3166 10.9024 20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconArrowDownwardFill',
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
