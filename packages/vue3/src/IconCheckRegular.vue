<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.1163 4.17823C21.5324 4.48082 21.6244 5.06339 21.3218 5.47945L11.0067 19.2876C10.8419 19.5142 10.5839 19.6546 10.3042 19.6699C10.0244 19.6851 9.75261 19.5736 9.56415 19.3663L2.74225 11.9622C2.39619 11.5816 2.42425 10.9925 2.80491 10.6464C3.18558 10.3003 3.77471 10.3284 4.12077 10.7091L10.173 17.2665L19.8151 4.38368C20.1177 3.96763 20.7003 3.87564 21.1163 4.17823Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconCheckRegular',
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
