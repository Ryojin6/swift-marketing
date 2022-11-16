<template>
  <div class="relative w-full bg-s-charcoal py-4" id="partners">
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
    >
      <slide>
        <div
          class="m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white"
        >
          <div class="w-16 bg-white/10"><img src="/divine.png" alt="" /></div>
          <div class="text-sm font-bold">Divine Providence</div>
        </div>
      </slide>
      <slide>
        <div
          class="m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
        >
          <div class="h-16 w-16 bg-white/10" />
          <div class="text-sm font-bold">Divine Providence</div>
        </div>
      </slide>
      <slide>
        <div
          class="m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
        >
          <div class="h-16 w-16 bg-white/10" />
          <div class="text-sm font-bold">Divine Providence</div>
        </div>
      </slide>
      <slide>
        <div
          class="m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
        >
          <div class="h-16 w-16 bg-white/10" />
          <div class="text-sm font-bold">Divine Providence</div>
        </div>
      </slide>
      <slide>
        <div
          class="m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
        >
          <div class="h-16 w-16 bg-white/10" />
          <div class="text-sm font-bold">Divine Providence</div>
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
  },
  props: {
    noPaginate: {
      type: Boolean,
      default: false,
    },
    mintSlider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselData: 0,

      hooperSettings: {
        itemsToShow: 2.5,
        centerMode: true,
        autoPlay: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3.5,
          },
          1000: {
            itemsToShow: 4.5,
            pagination: 'fraction',
          },
        },
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
</style>
