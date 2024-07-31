<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.2" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.8999C12.3313 5.8999 12.5999 6.16853 12.5999 6.4999V12.1437L16.7872 13.9732C17.0781 14.1318 17.1853 14.4963 17.0266 14.7872C16.868 15.0781 16.5035 15.1853 16.2126 15.0266L11.3999 12.8561V6.4999C11.3999 6.16853 11.6685 5.8999 11.9999 5.8999Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.33333C7.21353 3.33333 3.33333 7.21353 3.33333 12C3.33333 16.7865 7.21353 20.6667 12 20.6667C16.7865 20.6667 20.6667 16.7865 20.6667 12C20.6667 7.21353 16.7865 3.33333 12 3.33333Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconClockThin',
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
