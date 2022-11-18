<template>
  <nav class="pl-6 text-white xl:w-full">
    <div class="z-40 flex h-full w-full items-center">
      <div
        class="custom-transition z-30 hidden w-full items-center space-x-10 font-bold xl:flex"
      >
        <AtomSiteMenuItem
          v-for="item in links"
          :key="item.label"
          :item="item"
          class="transition-all duration-300 ease-in-out"
        />
      </div>
      <transition name="slide-fade">
        <div
          v-if="toggled"
          class="absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center space-y-6 bg-s-navy xl:shadow-xl"
          @click="toggled = !toggled"
        >
          <AtomSiteMenuItem
            v-for="item in links"
            :key="item.label"
            :item="item"
            class="textLarge text-white xl:hidden"
          />
        </div>
      </transition>
      <button
        class="focus:outline-none relative z-50 block xl:hidden"
        @click="toggled = !toggled"
      >
        <AtomIconHamburger :class="{ 'open text-white': toggled }" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    homepage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      siteUrl: process.env.FRONTEND_URI,
      links: [
        {
          label: 'About Swift',
          link: `#about`,
        },
        {
          label: 'Features',
          link: '#features',
        },
        {
          label: 'Team',
          link: '#team',
        },
        {
          label: 'Partners',
          link: '#partners',
        },
        {
          label: 'FAQ',
          link: '#faq',
        },
      ],
      toggled: false,
      toggleSearch: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>
