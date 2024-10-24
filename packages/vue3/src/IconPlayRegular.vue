<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M19.4 9.57527C21.2667 10.653 21.2667 13.3473 19.4 14.425L8.90005 20.4872C7.03338 21.5649 4.70005 20.2178 4.70005 18.0623L4.70005 5.93797C4.70005 3.78253 7.03338 2.43537 8.90005 3.51309L19.4 9.57527ZM18.6 13.0394C19.4 12.5775 19.4 11.4228 18.6 10.9609L8.10005 4.89874C7.30005 4.43686 6.30005 5.01421 6.30005 5.93797L6.30005 18.0623C6.30005 18.9861 7.30005 19.5634 8.10005 19.1016L18.6 13.0394Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconPlayRegular',
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
