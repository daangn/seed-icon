<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path d="M8.4801 21.2201L3.98105 21.9699C3.30423 22.0827 2.71745 21.496 2.83026 20.8191L3.5801 16.3201L13.671 6.22916L18.5634 11.1368L8.4801 21.2201Z" fill="#212124"/>
<path d="M18.0072 3.3072L21.493 6.79299C21.8835 7.18352 21.8835 7.81668 21.493 8.2072L19.953 9.74721L15.0645 4.83572L16.593 3.3072C16.9835 2.91668 17.6167 2.91668 18.0072 3.3072Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconEditFill',
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
