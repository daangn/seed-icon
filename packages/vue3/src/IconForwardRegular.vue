<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" d="M11.4344 4.56564C11.1219 4.25322 11.1219 3.74669 11.4344 3.43427C11.7468 3.12185 12.2533 3.12185 12.5657 3.43427L20.5657 11.4343C20.8782 11.7467 20.8782 12.2532 20.5657 12.5656L12.5657 20.5656C12.2533 20.8781 11.7468 20.8781 11.4344 20.5656C11.1219 20.2532 11.1219 19.7467 11.4344 19.4343L18.0687 12.8L4.00044 12.8C3.55861 12.8 3.20044 12.4418 3.20044 12C3.20044 11.5581 3.55861 11.2 4.00044 11.2H18.0687L11.4344 4.56564Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconForwardRegular',
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
