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
          <MoleculeCard
            image="/f1.png"
            subtitle="Minting"
            title="Ethereum"
            description="Our Ethereum module supports an array of utilities for our users to
         leverage, including contract minting via FlashBots or Mainnet, custom RPCs, 
         speed-up transactions, and so much more."
          />
          <MoleculeCard
            image="/f2.png"
            subtitle="Minting"
            title="Solana"
            description="Our Solana module supports multi-functional and platform minting. 
        Featuring CMV2, MonkeLabs, LMNFT, CIVIC support, and Magic. Our users have 
        complete control and access to everything on the Solana chain. "
          />
          <MoleculeCard
            image="/f3.png"
            subtitle="Minting"
            title="Aptos"
            description="Our Aptos module supports an array of utilities for our users to
         leverage, including custom tasks for Topaz, Bluemove, and LMNFT launchpad minting. "
          />
          <MoleculeCard
            image="/f4.png"
            subtitle="Sniping / Bulk Actions"
            title="Opensea"
            description="Our Opensea module allows users to monitor and purchase listings on 
        chain based on user custom inputs. Along with sniping, we support bulk actions like
         listing, sweeping, bidding, and canceling for collections and NFTs."
          />
          <MoleculeCard
            image="/f5.png"
            subtitle="Sniping / Bulk Actions"
            title="Looksrare"
            description="Our Looksrare module allows users to monitor and purchase listings based
         on user custom inputs. Along with sniping, we support bulk actions like listing,
          sweeping, bidding, and canceling for collections and NFTs."
          />
          <MoleculeCard
            image="/f6.png"
            subtitle="Sniping / Bulk Actions"
            title="X2Y2"
            description="Our X2Y2 module allows users to monitor and purchase listings based on 
        user custom inputs. Along with sniping, we support bulk actions like listing, sweeping, 
        bidding, and canceling for collections and NFTs."
          />
        </AtomInner>
      </slide>
      <slide>
        <AtomInner
          class="grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-3 xl:gap-12"
        >
          <MoleculeCard
            image="/s1.png"
            subtitle="Sniping"
            title="SudoSwap"
            description="Our SudoSwap module allows users to easily monitor and purchase NFTs
          based on the collection and other user inputs."
          />

          <MoleculeCard
            image="/s2.png"
            subtitle="Minting / Sniping"
            title="Magic Eden"
            description="Our Magic Eden Module allows users to both mint and snipe
          Solana/Ethereum NFTs on their platform based on user inputs."
          />

          <MoleculeCard
            image="/s3.png"
            subtitle="Minting"
            title="Blur.io"
            description="Our Blur.io module is packed with utilities allowing the user to
             monitor, snipe, sweep, list, and cancel NFT listings, all with a touch of a button. "
          />
          <MoleculeCard
            image="/s4.png"
            subtitle="Raffle Botting"
            title="Premint"
            description="Our Premint module gives our users full control over their accounts
             to help them mass enter and win multiple raffles at a time with a single touch of
              a button."
          />
          <MoleculeCard
            image="/s5.png"
            subtitle="Minting"
            title="FAIR.XYZ"
            description="Our FAIR.XYZ module allows users to mass mint with multiple wallets 
            via the FAIR platform giving users the ability to secure the mint on the mint day.  "
          />
          <MoleculeCard
            image="/s6.png"
            subtitle="Minting"
            title="LaunchMyNFT"
            description="Our LaunchMyNFT module supports multi-wallet minting for Solana 
            and APTOS mints, allowing the user to never miss a mint again via LaucnhMyNFT. "
          />
        </AtomInner>
      </slide>

      <slide>
        <AtomInner
          class="grid gap-10 text-white sm:grid-cols-2 lg:grid-cols-3 xl:gap-12"
        >
          <MoleculeCard
            image="/s7.png"
            subtitle="Minting / Sniping"
            title="Topaz"
            description="Our Topaz module allows users to take full control over their minting
             and sniping capabilites via the Topaz platform. "
          />
          <MoleculeCard
            image="/s8.png"
            subtitle="Minting / Sniping"
            title="BlueMove"
            description="Our Magic Eden Module allows users to both mint and snipe Solana/Ethereum
             NFTs on their platform based on user inputs. "
          />
          <MoleculeCard
            image="/s9.png"
            subtitle="Minting"
            title="MonkeLabs"
            description="Our Blur.io module is packed with utilities allowing the user to monitor,
             snipe, sweep, list, and cancel NFT listings, all with a touch of a button.  "
          />
          <MoleculeCard
            image="/s10.png"
            subtitle="Minting"
            title="RECUR"
            description="Our Premint module gives our users full control over their accounts to 
            help 
            them mass enter and win multiple raffles at a time with a single touch of a button."
          />
          <MoleculeCard
            image="/s11.png"
            subtitle="Sniping"
            title="Coinbase"
            description="Our FAIR.XYZ module allows users to mass mint with multiple wallets 
            via the FAIR platform giving users the ability to secure the mint on the mint day. "
          />
          <MoleculeCard
            image="/s12.png"
            subtitle="Minting"
            title="droppp.io"
            description="Our LaunchMyNFT module supports multi-wallet minting for Solana 
            and APTOS mints, allowing the user to never miss a mint again via LaucnhMyNFT. "
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
