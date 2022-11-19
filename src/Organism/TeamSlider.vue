<template>
  <AtomAnimate class="relative w-full py-4">
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
            <a
              href="https://twitter.com/briceplloyd"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m1.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">Founder</h2>
              <h3 class="textMedium font-bold uppercase">Brice Lloyd</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Experienced in product management and marketing. I have worked
                on multiple products and companies across the retail and web3
                space and am currently building and scaling Swift and Instant.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/ruthynft"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m2.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Operation Manager / Marketing
              </h2>
              <h3 class="textMedium font-bold uppercase">Ruthy#0001</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Experienced start-up professional and strategist. Took products
                to international markets and worked across product, sales, and
                marketing. Now building Surgence and progressing the space
                through training and democratizing opportunities.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/852bagiulfs"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m3.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Operation Manager / Community
              </h2>
              <h3 class="textMedium font-bold uppercase">bagiulfs#3622</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Experienced moderator excited to jump into community management.
                Also heavily focused on connecting with other web3 enthusiasts
                and building solid foundations for communities.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/mjk_yt"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m5.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Full Stack Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">mjk134#1140</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                I am an intermediate developer mainly focused around graphical
                development, including game dev, and UI. I am also proficient in
                backend developement.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/vihanganator"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m4.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Full Stack Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Turtlee#1343</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                4+ years of backend/frontend development experience. I enjoy
                coding in Golang and Javascript as well as being apart of a
                team.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/specialsdevs"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m6.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Full Stack Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">specials#0001</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                I'm a passionate person who loves diving deep into technology
                that empowers everyday users. Soon to graduate college with a
                Bachelor's degree in Computer Science.
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
            <a
              href=" https://twitter.com/ryojn6"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m7.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Front End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">Ryojin#0001</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                8+ years of front end and ux/ui experience in digital agency. I
                am passionate about clean and responsive UI.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href=" https://twitter.com/0xthibaulteth"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m8.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Full Stack Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">
                !0xthibault.eth#8283
              </h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Experienced fullstack developper. Having fun in multiples
                projects using Nodejs and Typescript.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href=" https://twitter.com/beansandeth"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m9.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">beans#0404</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Programmer for over 5 years - self taught. Have a long history
                in crypto and more recently NFTs. I run my own cryto mining
                operation and online businesses. I’ve built tools for OriginsNFT
                and infrastructure for many projects.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/devpanther999"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m12.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">DevPanther#0001</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Experienced Web / Mobile app developer with a demonstrated
                history of working in the computer software, Fintech and
                Logistics industry. Focused on being a valuable part of any team
                I am on and believe in the team rising together.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href="https://twitter.com/notmanyideas"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m11.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">NotManyIdeas#9972</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                Web Developer, passionate about code, math and web3. Always keen
                to adopt cutting-edge solutions for a wide range of problems,
                efficiently. Experienced in working in any kind of
                team/organization, with great sinergy and enthusiasm.
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center px-4">
            <a
              href=" https://twitter.com/gildedddd"
              class="custom-transition w-full hover:scale-105"
              target="_blank"
            >
              <img src="/m10.png" alt="" class="w-20" />
            </a>
            <div class="flex w-full flex-col pt-6">
              <h2 class="text-sm font-bold uppercase text-s-blue">
                Back End Developer
              </h2>
              <h3 class="textMedium font-bold uppercase">SAMBA#1543</h3>
              <div
                class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
              >
                20 years old, living in Spain. All time backend developer with
                over 4 years of experience. Web2 & Web3 enthusiast. Loves to
                work and learn with more developers.
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
          class="-ml-2 lg:-ml-10"
          @click.prevent="slidePrev"
          type="button"
        >
          <AtomIconNext class="w-8 rotate-180 transform lg:w-10" inverted />
        </button>

        <button
          class="-mr-2 lg:-mr-10"
          type="button"
          @click.prevent="slideNext"
        >
          <AtomIconNext class="w-8 lg:w-10" inverted />
        </button>
      </div>
    </div>
  </AtomAnimate>
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
