<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path d="M4.80005 1.80005H7.00004V3.80005H4.80005C4.24776 3.80005 3.80005 4.24776 3.80005 4.80005V7.00004L1.80005 7.00004V4.80005C1.80005 3.14319 3.14319 1.80005 4.80005 1.80005Z" fill="#212124"/>
<path d="M19.8 4.80005V7.00004L21.8 7.00004V4.80005C21.8 3.14319 20.4569 1.80005 18.8 1.80005H17V3.80005H18.8C19.3523 3.80005 19.8 4.24776 19.8 4.80005Z" fill="#212124"/>
<path d="M18.8 19.8H17V21.8H18.8C20.4569 21.8 21.8 20.4569 21.8 18.8V17H19.8V18.8C19.8 19.3523 19.3523 19.8 18.8 19.8Z" fill="#212124"/>
<path d="M3.80005 18.8V17H1.80005V18.8C1.80005 20.4569 3.14319 21.8 4.80005 21.8H7.00004V19.8H4.80005C4.24776 19.8 3.80005 19.3523 3.80005 18.8Z" fill="#212124"/>
<path d="M22 11.2H2.00005V13.2H22V11.2Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconScannerFill',
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
