<!-- eslint-disable --> <!-- @ts-nocheck @ts-ignore -->
<template>
  <svg data-seed-icon="true" data-seed-icon-version="0.7.3" :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Weight=Regular">
<path id="vector" fill-rule="evenodd" clip-rule="evenodd" d="M22.441 2.33275C22.6651 2.48085 22.7999 2.73155 22.7999 3.0002V18.1581C22.7999 18.4787 22.6086 18.7683 22.3137 18.894L15.647 21.7361C15.4466 21.8216 15.22 21.8216 15.0196 21.7361L8.61013 19.0037L2.21302 20.7713C1.97224 20.8378 1.71419 20.7881 1.51542 20.6368C1.31664 20.4855 1.19995 20.25 1.19995 20.0002V4.8423C1.19995 4.48253 1.44011 4.16702 1.78688 4.0712L8.45355 2.22909C8.62807 2.18087 8.81379 2.19328 8.98035 2.26428L15.3333 4.97264L21.6862 2.26428C21.9333 2.15893 22.2168 2.18465 22.441 2.33275ZM14.5333 6.37092L9.46662 4.21092V17.6295L14.5333 19.7895V6.37092ZM16.1333 19.7895L21.2 17.6295V4.21092L16.1333 6.37092V19.7895ZM7.86662 17.5492V4.05123L2.79995 5.45123V18.9492L7.86662 17.5492Z" fill="#212124"/>
</g>
</svg>
</template>

<script lang="ts">
export default {
  name: 'IconMapRegular',
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
