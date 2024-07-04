<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.1" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 2C6.47707 2 2 6.47707 2 11.9998C2 17.5225 6.47707 21.9996 11.9998 21.9996C17.5225 21.9996 21.9996 17.5225 21.9996 11.9998C21.9996 6.47707 17.5225 2 11.9998 2ZM12.8165 7.9184C12.8165 7.46756 12.451 7.10209 12.0002 7.10209C11.5494 7.10209 11.1839 7.46756 11.1839 7.9184V12.5101C11.1839 12.961 11.5494 13.3265 12.0002 13.3265C12.451 13.3265 12.8165 12.961 12.8165 12.5101V7.9184ZM12 17.1019C12.5635 17.1019 13.0204 16.645 13.0204 16.0815C13.0204 15.5179 12.5635 15.0611 12 15.0611C11.4365 15.0611 10.9796 15.5179 10.9796 16.0815C10.9796 16.645 11.4365 17.1019 12 17.1019Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconWarningFill',
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
