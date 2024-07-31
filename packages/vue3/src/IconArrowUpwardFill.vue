<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.2" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 12.7071C20.3166 13.0976 19.6834 13.0976 19.2929 12.7071L13 6.41421L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 6.41421L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconArrowUpwardFill',
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
