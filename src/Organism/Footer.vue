<template>
  <footer class="bg-s-charcoal">
    <div
      class="flex flex-col items-center justify-between border-t border-b border-gray-400 py-4 px-8 text-center text-xs text-white md:flex-row md:text-left xl:px-12"
    >
      <div class="flex items-center justify-between space-x-4 text-right">
        <img src="/logo.png" alt="" />
      </div>
      <div
        class="flex flex-col items-center justify-center md:flex-row md:space-x-6"
      >
        <div>
          <div class="gradientText text-sm font-bold">SUPPORT</div>
          <div class="space-x-4 text-gray-400">
            <g-link
              class="custom-transition hover:text-lab-pink"
              to="https://dashboard.swifttech.app/
"
            >
              Membership</g-link
            >
            <g-link
              class="custom-transition hover:text-lab-pink"
              to="https://discord.gg/swift-tech
"
            >
              Support</g-link
            >
          </div>
        </div>
        <div class="">
          <div class="gradientText text-sm font-bold uppercase">Legal</div>
          <div class="space-x-4 text-gray-400">
            <g-link class="custom-transition hover:text-lab-pink" to="/terms">
              Terms and Conditions</g-link
            >
            <g-link class="custom-transition hover:text-lab-pink" to="/privacy">
              Privacy Policy</g-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full justify-between px-4 py-2 md:flex md:px-12">
      <div class="p-3 text-center text-xs text-white">
        © 2022 Swift Tech | All rights reserved
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
  </footer>
</template>
