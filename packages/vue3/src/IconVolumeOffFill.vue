<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<g id="vector">
<path d="M16.8002 5.17408C16.8002 3.63625 14.9964 2.80661 13.8288 3.80742L8.76043 8.15171C8.72418 8.18278 8.67801 8.19986 8.63027 8.19986H5.0002C4.00608 8.19986 3.2002 9.00575 3.2002 9.99986V15.7954C3.2002 16.3501 3.64993 16.7999 4.2047 16.7999C4.44743 16.7999 4.68195 16.712 4.86489 16.5525L16.1832 6.68297C16.5752 6.34114 16.8002 5.84644 16.8002 5.32632V5.17408Z" fill="#212124"/>
<path d="M16.8002 9.99986C16.8002 9.95653 16.7967 9.91376 16.7899 9.87186L20.527 6.6019C20.8595 6.31096 20.8932 5.80555 20.6023 5.47304C20.3113 5.14053 19.8059 5.10683 19.4734 5.39778L3.4734 19.3978C3.14089 19.6887 3.1072 20.1941 3.39814 20.5266C3.68909 20.8592 4.1945 20.8928 4.52701 20.6019L8.8145 16.8503L13.954 20.5214C15.1453 21.3724 16.8002 20.5207 16.8002 19.0567V9.99986Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconVolumeOffFill',
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
