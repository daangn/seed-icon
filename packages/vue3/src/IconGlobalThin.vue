<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2.5999C6.80843 2.5999 2.5999 6.80843 2.5999 11.9999C2.5999 17.1914 6.80843 21.3999 11.9999 21.3999C17.1914 21.3999 21.3999 17.1914 21.3999 11.9999C21.3999 6.80843 17.1914 2.5999 11.9999 2.5999ZM1.3999 11.9999C1.3999 6.14568 6.14568 1.3999 11.9999 1.3999C17.8541 1.3999 22.5999 6.14568 22.5999 11.9999C22.5999 17.8541 17.8541 22.5999 11.9999 22.5999C6.14568 22.5999 1.3999 17.8541 1.3999 11.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5963 22.4441C5.43618 16.844 5.43618 7.15627 11.5963 1.55615L12.4035 2.44408C6.76711 7.56808 6.76711 16.4322 12.4035 21.5562L11.5963 22.4441Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4035 22.4441C18.5636 16.844 18.5636 7.15627 12.4035 1.55615L11.5963 2.44408C17.2327 7.56808 17.2327 16.4322 11.5963 21.5562L12.4035 22.4441Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.8999 8.9999C1.8999 8.66853 2.16853 8.3999 2.4999 8.3999H21.4999C21.8313 8.3999 22.0999 8.66853 22.0999 8.9999C22.0999 9.33127 21.8313 9.5999 21.4999 9.5999H2.4999C2.16853 9.5999 1.8999 9.33127 1.8999 8.9999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.8999 14.9999C1.8999 14.6685 2.16853 14.3999 2.4999 14.3999H21.4999C21.8313 14.3999 22.0999 14.6685 22.0999 14.9999C22.0999 15.3313 21.8313 15.5999 21.4999 15.5999H2.4999C2.16853 15.5999 1.8999 15.3313 1.8999 14.9999Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconGlobalThin',
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
