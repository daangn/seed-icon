<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.2" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.60783 5.58295L8 3.28418V18.4421L3.39217 20.4065C2.73251 20.6877 2 20.2037 2 19.4866V6.50284C2 6.10212 2.23921 5.74009 2.60783 5.58295ZM15 20.8579L9.6 18.5558V3.39786L15 5.69997V20.8579ZM16.6 20.46L21.3922 18.417C21.7608 18.2598 22 17.8978 22 17.4971V4.51337C22 3.79627 21.2675 3.31225 20.6078 3.59347L16.6 5.30207V20.46Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconMapFill',
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
