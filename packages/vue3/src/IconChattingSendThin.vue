<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.08216 2.72664C2.00738 2.39919 2.34507 2.13095 2.64711 2.27788L21.7074 11.5504C22.0824 11.7329 22.0824 12.2672 21.7074 12.4496L2.64711 21.7223C2.34507 21.8692 2.00738 21.6009 2.08217 21.2735L4.20017 12L2.08216 2.72664ZM5.29403 12.6L3.62389 19.9126L19.8885 12L3.62389 4.08754L5.29403 11.4L14.8936 11.7918C15.0052 11.7964 15.0934 11.8882 15.0934 12C15.0934 12.1118 15.0052 12.2036 14.8936 12.2082L5.29403 12.6Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconChattingSendThin',
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
