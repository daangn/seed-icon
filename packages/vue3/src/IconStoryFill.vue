<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.76 6.24023C21.35 5.00023 20.43 3.98023 19.09 3.29023C17.1 2.26023 14.72 1.74023 12 1.74023C9.27995 1.74023 6.88995 2.26023 4.90995 3.29023C3.56995 3.98023 2.64995 5.00023 2.23995 6.24023C1.86995 7.36023 1.69995 9.46023 1.69995 10.9402C1.69995 12.4202 1.86995 14.5202 2.23995 15.6402C2.55995 16.6102 3.19995 17.4302 4.09995 18.0802V20.8202C4.09995 21.2802 4.34995 21.7102 4.74995 21.9502C4.94995 22.0702 5.16995 22.1202 5.39995 22.1202C5.62995 22.1202 5.84995 22.0602 6.04995 21.9502L9.48995 19.9602C10.3 20.0702 11.12 20.1402 12 20.1402C14.72 20.1402 17.11 19.6202 19.09 18.5902C20.43 17.9002 21.35 16.8802 21.76 15.6402C22.13 14.5202 22.2999 12.4202 22.2999 10.9402C22.2999 9.46023 22.13 7.37023 21.76 6.24023ZM14.95 11.3502L10.48 13.9302C10.15 14.1202 9.72995 13.8802 9.72995 13.5002V8.34023C9.72995 7.96023 10.15 7.71023 10.48 7.91023L14.95 10.4902C15.28 10.6802 15.28 11.1602 14.95 11.3602V11.3502Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconStoryFill',
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
