<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M12.0845 5.62928C12.7258 6.59489 13.0998 7.75416 13.0998 9.00015C13.0998 12.3691 10.3687 15.1001 6.99981 15.1001C6.81337 15.1001 6.62878 15.0918 6.44642 15.0753C7.53074 17.0571 9.63522 18.4003 12.0523 18.4003C15.5789 18.4003 18.4378 15.5414 18.4378 12.0148C18.4378 8.49887 15.5963 5.64664 12.0845 5.62928ZM10.8032 4.53164C11.21 4.46421 11.6272 4.4292 12.0523 4.4292C16.2417 4.4292 19.6378 7.82537 19.6378 12.0148C19.6378 16.2041 16.2417 19.6003 12.0523 19.6003C8.72133 19.6003 5.89331 17.4537 4.87311 14.4702C4.80052 14.2579 4.85242 14.0229 5.00763 13.8609C5.16285 13.699 5.39545 13.6371 5.61062 13.7006C6.05032 13.8303 6.51639 13.9001 6.99981 13.9001C9.70601 13.9001 11.8998 11.7063 11.8998 9.00015C11.8998 7.65253 11.3566 6.43294 10.4757 5.54647C10.3175 5.38721 10.2614 5.15295 10.3304 4.93929C10.3993 4.72564 10.5818 4.56835 10.8032 4.53164Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconMoonThin',
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
