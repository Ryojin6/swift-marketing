<template>
  <div class="relative w-full py-4">
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
    >
      <slide>
        <AtomInner
          class="grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-3 xl:gap-12"
        >
          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m1.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">Founder</h2>
              <h3 class="textMedium font-bold uppercase">Brice Lloyd</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m2.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Chieff of Staff/Marketing
              </h2>
              <h3 class="textMedium font-bold uppercase">Julian Stafford</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m3.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Chieff of Staff/Community
              </h2>
              <h3 class="textMedium font-bold uppercase">Bagiulfs</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m4.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Lead Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">
                Vihanga Weerasinghe
              </h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m5.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Lead Front End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Mohit Jena</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m6.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Solidity/Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Shivam Singh</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>
        </AtomInner>
      </slide>
      <slide>
        <AtomInner
          class="grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-3 xl:gap-12"
        >
          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m1.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">Founder</h2>
              <h3 class="textMedium font-bold uppercase">Brice Lloyd</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m2.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Chieff of Staff/Marketing
              </h2>
              <h3 class="textMedium font-bold uppercase">Julian Stafford</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m3.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Chieff of Staff/Community
              </h2>
              <h3 class="textMedium font-bold uppercase">Bagiulfs</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m4.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Lead Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">
                Vihanga Weerasinghe
              </h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m5.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Lead Front End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Mohit Jena</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a href="#" class="custom-transition w-full hover:scale-105">
              <img src="/m6.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Solidity/Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Shivam Singh</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates in sunt unde, quasi error maiores a, laborum atque
                exercitationem nam nobis est dolores minima culpa corrupti! Sed,
                minima eligendi.
              </div>
            </div>
          </div>
        </AtomInner>
      </slide>

      <hooper-pagination slot="hooper-addons" />
    </hooper>
    <div
      class="md:pin-y-center absolute bottom-0 mx-auto w-full text-s-pink md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button
          class="-ml-6 lg:-ml-10"
          @click.prevent="slidePrev"
          type="button"
        >
          <AtomIconNext class="w-8 rotate-180 transform lg:w-10" inverted />
        </button>

        <button
          class="-mr-6 lg:-mr-10"
          type="button"
          @click.prevent="slideNext"
        >
          <AtomIconNext class="w-8 lg:w-10" inverted />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
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
        itemsToShow: 1,
        centerMode: true,
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
  @apply -bottom-16 py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
</style>
