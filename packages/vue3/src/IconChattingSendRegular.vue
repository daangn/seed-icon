<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.08238 2.55818C1.99104 2.14719 2.4175 1.81422 2.79407 2.0025L21.7156 11.4632C22.1578 11.6843 22.1578 12.3154 21.7156 12.5365L2.79408 21.9973C2.41751 22.1856 1.99104 21.8527 2.08238 21.4417L4.18054 11.9999L2.08238 2.55818ZM5.64179 12.7999L4.14561 19.5327L19.2112 11.9999L4.14562 4.46713L5.64179 11.1999L14.8004 11.7872C14.9126 11.7944 15 11.8875 15 12C15 12.1125 14.9126 12.2056 14.8004 12.2128L5.64179 12.7999Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconChattingSendRegular',
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
