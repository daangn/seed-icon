<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M12 8.19971C11.7626 8.19971 11.5375 8.30516 11.3855 8.48756L6.38546 14.4876C6.18674 14.726 6.1439 15.0579 6.27557 15.339C6.40723 15.6201 6.68962 15.7997 7.00004 15.7997L17 15.7997C17.3105 15.7997 17.5928 15.6201 17.7245 15.339C17.8562 15.0579 17.8133 14.726 17.6146 14.4876L12.6146 8.48756C12.4626 8.30517 12.2375 8.19971 12 8.19971ZM15.292 14.1997L8.70807 14.1997L12 10.2493L15.292 14.1997Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconArrowDropUpRegular',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
  data() {
    return {
      svg: null as Element | null,
    };
  },
  mounted() {
    this.svg = this.$refs.svg as Element;
  },
};
</script>
