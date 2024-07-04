<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.1" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.4244 11.4242C19.19 11.6585 18.8101 11.6585 18.5758 11.4242L12.6001 5.44843V19.9999C12.6001 20.3313 12.3315 20.5999 12.0001 20.5999C11.6687 20.5999 11.4001 20.3313 11.4001 19.9999V5.44843L5.42436 11.4242C5.19005 11.6585 4.81015 11.6585 4.57583 11.4242C4.34152 11.1899 4.34152 10.81 4.57583 10.5756L11.5758 3.57564C11.8101 3.34132 12.19 3.34132 12.4244 3.57564L19.4244 10.5756C19.6587 10.81 19.6587 11.1899 19.4244 11.4242Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconArrowUpwardThin',
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
