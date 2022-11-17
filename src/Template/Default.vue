<template>
  <!-- <div class="bg-gradient-to-b from-black to-n-mBlue"> -->
  <div class="overflow-hidden bg-s-navy font-sans font-semibold">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />
    <div class="">
      <OrganismHeader v-if="homepage" />
      <div id="content" />
      <slot />
      <OrganismFooter />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>
