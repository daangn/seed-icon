<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path d="M12 7.10204C12.4508 7.10204 12.8163 7.46752 12.8163 7.91837V12.5102C12.8163 12.9611 12.4508 13.3265 12 13.3265C11.5492 13.3265 11.1837 12.9611 11.1837 12.5102V7.91837C11.1837 7.46752 11.5492 7.10204 12 7.10204Z" fill="#212124"/>
<path d="M13.0202 16.0816C13.0202 16.6452 12.5634 17.102 11.9998 17.102C11.4362 17.102 10.9794 16.6452 10.9794 16.0816C10.9794 15.5181 11.4362 15.0612 11.9998 15.0612C12.5634 15.0612 13.0202 15.5181 13.0202 16.0816Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.63265C7.37884 3.63265 3.63265 7.37884 3.63265 12C3.63265 16.6212 7.37884 20.3673 12 20.3673C16.6212 20.3673 20.3673 16.6212 20.3673 12C20.3673 7.37884 16.6212 3.63265 12 3.63265Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconWarningRegular',
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
