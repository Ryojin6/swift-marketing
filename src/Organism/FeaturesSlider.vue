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
          <MoleculeCard
            image="/s13.png"
            subtitle="Preformance and Accuracy"
            title="Multi Chain Minting"
            description="Never miss a mint again with our fully customizable 
            multi-chain minter, accompanied by our in-house discord drop Callender 
            and configuration guides to help you stay up to date."
          />
          <MoleculeCard
            image="/s14.png"
            subtitle="Orginaztion and Insight"
            title="Multi Wallet Handlings"
            description="With Swift, you’ll never have to worry about wallet
             management again. With over 5 different wallet functions, we give 
             users full access and control over their multi-wallet trading needs."
          />
          <MoleculeCard
            image="/s15.png"
            subtitle="Smooth, Simple, and Easy"
            title="Fund/Token Management "
            description="Managing your money and NFTs has never been more simple 
            with Swift. With our simple and easy UI interface, our users can meet 
            all their management needs with a simple tap of a button."
          />
          <MoleculeCard
            image="/s16.png"
            subtitle="Trakcing and Analysis"
            title="In Depth Portfolio Insights"
            description="Getting insights for your portfolio has never been easier 
            with Swift. Straight from our dashboard, our users can get clear and
             accurate insights into how they’ve done via their trading experience. "
          />
          <MoleculeCard
            image="/s17.png"
            subtitle="Smooth NFT Aggregation"
            title="Bulk Sweep, Sell ,Cancel , Bid "
            description="NFT aggregation has never been better. With multi-marketplace 
            support, we give users full accessibility to ensure they can finish the
             trade while never needing to leave the app."
          />
          <MoleculeCard
            image="/s18.png"
            subtitle="Every Module You’ll Ever Need"
            title="Multi Platform Minting / Sniping"
            description="With Swift, you can truly never miss a beat. Whether it's a 
            new mint, a trending collection, or a popular raffle, Swift has your back to
             help you smoothly automate and trade on every platform you want and need."
          />
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
