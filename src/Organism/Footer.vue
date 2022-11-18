<template>
  <footer class="bg-s-charcoal">
    <div
      class="flex flex-col items-center justify-between border-t py-3 px-8 text-xs text-white sm:flex-row xl:px-12"
    >
      <div class="flex items-center justify-between space-x-4 text-right">
        <img src="/logo.png" alt="" />
      </div>
      <div class="space-x-4">
        <g-link class="custom-transition hover:text-lab-pink" to="/terms">
          Terms and Conditions</g-link
        >
        <g-link class="custom-transition hover:text-lab-pink" to="/privacy">
          Privacy Policy</g-link
        >
      </div>
      <div
        class="flex w-full items-center justify-center space-x-4 pt-10 sm:justify-end sm:pt-0 md:w-auto"
      >
        <AtomIconTwitter
          link="https://twitter.com/SwiftTechApp"
          class="text-s-purple"
        />
        <AtomIconDiscord
          link="https://discord.gg/swift-tech"
          class="text-s-purple"
        />
        <AtomIconYoutube
          link="https://www.youtube.com/channel/UCkSgAsnUMN5KxQlapdHfXgg"
          class="text-s-purple"
        />
      </div>
    </div>
    <div class="bg-s-navy p-3 text-center text-xs text-white">
      © 2022 Swift Tech | All rights reserved
    </div>
  </footer>
</template>
