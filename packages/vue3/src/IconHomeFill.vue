<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Fill">
<path id="vector" d="M11.4685 2.40202C11.7716 2.13259 12.2283 2.13259 12.5314 2.40202L21.5314 10.402C21.7022 10.5538 21.7999 10.7714 21.7999 11V21C21.7999 21.4418 21.4418 21.7999 21 21.7999H15C14.5581 21.7999 14.2 21.4418 14.2 21V16C14.2 14.7418 13.2581 13.8 12 13.8C10.7418 13.8 9.79995 14.7418 9.79995 16V20.9999C9.79995 21.4417 9.44178 21.7999 8.99995 21.7999H2.99995C2.55812 21.7999 2.19995 21.4418 2.19995 21V11C2.19995 10.7714 2.29767 10.5538 2.46846 10.402L11.4685 2.40202Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconHomeFill',
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
