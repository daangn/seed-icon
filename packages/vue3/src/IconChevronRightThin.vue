/* eslint-disable */ // @ts-nocheck @ts-ignore
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M8.22246 3.17006L16.6325 11.5801C16.8625 11.8101 16.8625 12.1901 16.6325 12.4201L8.22246 20.8301C7.99246 21.0601 7.61246 21.0601 7.38246 20.8301C7.15246 20.6001 7.15246 20.2201 7.38246 19.9901L15.3725 12.0001L7.38246 4.01006C7.15246 3.78006 7.15246 3.40006 7.38246 3.17006C7.61246 2.94006 7.99246 2.94006 8.22246 3.17006Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconChevronRightThin',
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
