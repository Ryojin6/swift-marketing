<template>
  <!-- <div class="bg-gradient-to-b from-black to-n-mBlue"> -->
  <div class="overflow-hidden bg-s-navy font-sans">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />
    <div class="">
      <OrganismHeader v-if="homepage" />
      <div id="content" />
      <slot />
      <footer class="bg-s-charcoal">
        <div
          class="flex flex-col items-center justify-between border-t py-3 px-8 text-xs text-white sm:flex-row xl:px-12"
        >
          <div class="flex items-center justify-between space-x-4 text-right">
            <img src="/logo.png" alt="" />
          </div>
          <div class="space-x-4">
            <g-link
              class="custom-transition hover:text-lab-pink"
              to="/privacy-policy"
            >
              Terms and Conditions</g-link
            >
            <g-link
              class="custom-transition hover:text-lab-pink"
              to="/privacy-policy"
            >
              Privacy Policy</g-link
            >
          </div>
          <div
            class="flex w-full items-center justify-center space-x-4 pt-10 sm:justify-end sm:pt-0 md:w-auto"
          >
            <AtomIconTwitter link="#" class="text-s-purple" />
            <AtomIconDiscord link="#" class="text-s-purple" />
          </div>
        </div>
        <div class="bg-s-navy p-3 text-center text-xs text-white">
          © 2022 Swift TechKKK | All rights reserved
        </div>
      </footer>
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
