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
      <footer class="bg-lab-navy">
        <div
          class="flex flex-col items-center justify-between border-t py-6 px-8 text-xs text-white sm:flex-row xl:px-12"
        >
          <div class="flex justify-between space-x-4 text-right">
            <span
              >Copyright © 2022 <span class="text-red">Lightlabs</span></span
            >
            <span> | </span>
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
            <AtomIconTwitter
              link="https://twitter.com/lightlabsio"
              class="text-lab-pink hover:text-lab-lightpink"
            />
            <AtomIconDiscord
              link="https://discord.gg/u66WAqB9Cx "
              class="text-lab-pink hover:text-lab-lightpink"
            />
            <AtomIconInstagram
              link="https://instagram.com/lightlabsio"
              class="text-lab-pink hover:text-lab-lightpink"
            />
            <AtomIconTiktok
              link="https://www.tiktok.com/@lightlabsio"
              class="text-lab-pink hover:text-lab-lightpink"
            />
          </div>
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
