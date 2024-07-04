<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" d="M21 18V19H4V18V7C4 6.44772 4.44772 6 5 6H20C20.5523 6 21 6.44772 21 7V18ZM10.05 14.9926C9.22157 14.9926 8.55 15.6641 8.55 16.4926C8.55 17.321 9.22157 17.9926 10.05 17.9926H14.75C15.5784 17.9926 16.25 17.321 16.25 16.4926C16.25 15.6641 15.5784 14.9926 14.75 14.9926H10.05Z" fill="#212124" stroke="#212124" stroke-width="2"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconLaptopFill',
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
