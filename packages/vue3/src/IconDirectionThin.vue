<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" d="M15.4242 2.17574C15.1899 1.94142 14.81 1.94142 14.5756 2.17574C14.3413 2.41005 14.3413 2.78995 14.5756 3.02426L18.5514 7H7.9999C5.45939 7 3.3999 9.05949 3.3999 11.6V21.6C3.3999 21.9314 3.66853 22.2 3.9999 22.2C4.33127 22.2 4.5999 21.9314 4.5999 21.6V11.6C4.5999 9.72223 6.12213 8.2 7.9999 8.2H18.5514L14.5756 12.1757C14.3413 12.4101 14.3413 12.7899 14.5756 13.0243C14.81 13.2586 15.1899 13.2586 15.4242 13.0243L20.4242 8.02426C20.6585 7.78995 20.6585 7.41005 20.4242 7.17574L15.4242 2.17574Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconDirectionThin',
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
