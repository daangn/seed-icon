<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path d="M4.8 2H6.99999V3.6H4.8C4.13726 3.6 3.6 4.13726 3.6 4.8V6.99999L2 6.99999V4.8C2 3.2536 3.2536 2 4.8 2Z" fill="#212124"/>
<path d="M20 4.8V6.99999L21.6 6.99999V4.8C21.6 3.2536 20.3464 2 18.8 2H17V3.6H18.8C19.4627 3.6 20 4.13726 20 4.8Z" fill="#212124"/>
<path d="M18.8 20H17V21.6H18.8C20.3464 21.6 21.6 20.3464 21.6 18.8V17H20V18.8C20 19.4627 19.4627 20 18.8 20Z" fill="#212124"/>
<path d="M3.6 18.8V17H2V18.8C2 20.3464 3.2536 21.6 4.8 21.6H6.99999V20H4.8C4.13726 20 3.6 19.4627 3.6 18.8Z" fill="#212124"/>
<path d="M22 11.2002H2V12.8002H22V11.2002Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconScannerRegular',
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
