<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Thin">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.9529 2.29291C11.2806 1.27606 12.7193 1.27606 13.0469 2.29291L15.0953 8.64998H21.4349C22.506 8.64998 22.9454 10.0252 22.0727 10.6462L16.9053 14.3233L18.8944 20.4306C19.2246 21.4446 18.0634 22.2882 17.2012 21.6606L11.9999 17.8754L6.79872 21.6606C5.93646 22.2882 4.77527 21.4446 5.10553 20.4306L7.0946 14.3233L1.92722 10.6462C1.05449 10.0252 1.49386 8.64998 2.56498 8.64998H8.90456L10.9529 2.29291ZM11.9999 2.95633L10.0244 9.08735C9.87793 9.54187 9.45494 9.84998 8.9774 9.84998H2.87799L7.8502 13.3882C8.24196 13.6669 8.40726 14.1679 8.25836 14.625L6.34209 20.5088L11.3527 16.8623C11.7385 16.5815 12.2614 16.5815 12.6472 16.8623L17.6578 20.5088L15.7415 14.625C15.5926 14.1679 15.7579 13.6669 16.1497 13.3882L21.1219 9.84998H15.0225C14.5449 9.84998 14.1219 9.54187 13.9755 9.08735L11.9999 2.95633Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconInterestListThin',
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
