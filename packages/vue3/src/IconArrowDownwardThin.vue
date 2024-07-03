/* eslint-disable */ // @ts-nocheck @ts-ignore
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M4.57588 12.5756C4.8102 12.3413 5.1901 12.3413 5.42441 12.5756L11.4001 18.5513L11.4001 3.99985C11.4001 3.66848 11.6688 3.39985 12.0001 3.39985C12.3315 3.39985 12.6001 3.66848 12.6001 3.99985L12.6001 18.5513L18.5759 12.5756C18.8102 12.3413 19.1901 12.3413 19.4244 12.5756C19.6587 12.8099 19.6587 13.1898 19.4244 13.4241L12.4244 20.4241C12.1901 20.6584 11.8102 20.6584 11.5759 20.4241L4.57588 13.4241C4.34157 13.1898 4.34157 12.8099 4.57588 12.5756Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconArrowDownwardThin',
  props: {
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 24,
    },
  },
  setup(props) {
    const svg = ref<SVGSVGElement | null>(null);

    return {
      svg,
      size: props.size,
    };
  },
});
</script>
