<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.1" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.4 9.57527C21.2667 10.653 21.2667 13.3473 19.4 14.425L8.90005 20.4872C7.03338 21.5649 4.70005 20.2178 4.70005 18.0623L4.70005 5.93797C4.70005 3.78253 7.03338 2.43537 8.90005 3.51309L19.4 9.57527Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconPlayFill',
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
