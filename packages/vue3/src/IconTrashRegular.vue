<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<g id="vector">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99995 5.19995C5.44178 5.19995 5.79995 5.55812 5.79995 5.99995V18C5.79995 19.215 6.78492 20.2 7.99995 20.2H16C17.215 20.2 18.2 19.215 18.2 18V5.99995C18.2 5.55812 18.5581 5.19995 19 5.19995C19.4418 5.19995 19.8 5.55812 19.8 5.99995V18C19.8 20.0986 18.0986 21.8 16 21.8H7.99995C5.90127 21.8 4.19995 20.0986 4.19995 18V5.99995C4.19995 5.55812 4.55812 5.19995 4.99995 5.19995Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.49995 10.2C8.94178 10.2 9.29995 10.5581 9.29995 11V16C9.29995 16.4418 8.94178 16.8 8.49995 16.8C8.05812 16.8 7.69995 16.4418 7.69995 16V11C7.69995 10.5581 8.05812 10.2 8.49995 10.2Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.2C12.4418 10.2 12.8 10.5581 12.8 11V16C12.8 16.4418 12.4418 16.8 12 16.8C11.5581 16.8 11.2 16.4418 11.2 16V11C11.2 10.5581 11.5581 10.2 12 10.2Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10.2C15.9418 10.2 16.3 10.5581 16.3 11V16C16.3 16.4418 15.9418 16.8 15.5 16.8C15.0581 16.8 14.7 16.4418 14.7 16V11C14.7 10.5581 15.0581 10.2 15.5 10.2Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.19995 5.99995C2.19995 5.55812 2.55812 5.19995 2.99995 5.19995H21C21.4418 5.19995 21.7999 5.55812 21.7999 5.99995C21.7999 6.44178 21.4418 6.79995 21 6.79995H2.99995C2.55812 6.79995 2.19995 6.44178 2.19995 5.99995Z" fill="#212124"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.24101 2.74697C8.3499 2.4203 8.65561 2.19995 8.99996 2.19995H15C15.3443 2.19995 15.65 2.4203 15.7589 2.74697L16.7589 5.74697C16.8402 5.99093 16.7993 6.2591 16.649 6.46772C16.4986 6.67633 16.2571 6.79995 16 6.79995H7.99996C7.7428 6.79995 7.50132 6.67633 7.35096 6.46772C7.2006 6.2591 7.15969 5.99093 7.24101 5.74697L8.24101 2.74697ZM9.57656 3.79995L9.1099 5.19995H14.89L14.4233 3.79995H9.57656Z" fill="#212124"/>
</g>
</g>
</svg>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'IconTrashRegular',
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
