<template>
  <TemplateDefault class="relative" homepage>
    <AtomSection
      class="relative flex w-full items-center justify-center 2xl:py-48"
      tp="large"
      bp="large"
    >
      <div class="absolute left-0 top-0 h-full w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1088 955"
          fill="none"
        >
          <path fill="url(#a)" d="M1088 955 183.391 0H-7v955h1095Z" />
          <defs>
            <linearGradient
              x1="702.5"
              x2="-150.471"
              y1="387.668"
              y2="972.538"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9570EC" stop-opacity=".06" />
              <stop offset="1" stop-color="#1B1932" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="mx-auto w-full max-w-8xl pb-10">
        <div class="z-10 mx-auto w-full space-y-10 text-white md:flex">
          <AtomAnimate position="left" class="md:w-1/2">
            <h1 class="textXLarge gradientText">
              NFT Automation & Alpha Community at its Finest
            </h1>
            <div class="textSmall py-6 text-gray-400 xl:py-12">
              Swift Tech is truly every NFT traders dream, providing the most
              adaptable and dynamic tools on the market to take the everyday
              trader to the next level.
            </div>
            <div class="flex space-x-4">
              <AtomPlainLink to="#features" class="btn">
                Preview Features
              </AtomPlainLink>
              <AtomPlainLink
                to="https://discord.gg/swift-tech"
                class="btn-border"
              >
                Join Discord
              </AtomPlainLink>
            </div>
            <div class="mt-10 border-l-4 border-s-violet pl-4 text-gray-400">
              We are currently in a free beta. Follow our twitter for upcoming
              restocks!
            </div>
            <div class="mt-10 flex items-center space-x-2 text-gray-500">
              <div
                class="mouse relative h-8 w-4 rounded-3xl border border-gray-500"
              />
              <span>Learn More</span>
            </div>
          </AtomAnimate>
          <AtomAnimate
            position="right"
            class="md:pin-y-center max-w-6xl md:absolute md:-right-24 md:w-1/2"
          >
            <img src="/landing.png" alt="" class="w-full" />
          </AtomAnimate>
        </div>
      </div>
    </AtomSection>
    <div class="w-full bg-gradient-to-r from-s-pink to-s-violet py-4" />

    <AtomSection
      tp="small"
      bp="small"
      class="relative z-10 bg-s-navy"
      id="about"
    >
      <AtomInner>
        <OrganismTwoColumn
          reverse
          class="text-white"
          image="/about.png"
          link="https://discord.gg/swift-tech"
          button-title="Join Discord"
          subtitle="About Us"
          title="Why Swift AIO?"
          description="Swift AIO is one of the most growing and advancing tools
           in today's market. With over 20 planned modules and an even more 
           passionate team, we plan to bring our users both quality and 
           utility at its finest. At Swift, we understand the want and 
           need for a seamless, simple, and dynamic user trading experience. 
           So to fulfill that need, Swift is bringing you a one-stop-shop
            for everything you need to help inform, visualize, and automate all 
            your trades. <span class='gradientText inline'> Are you ready to take
               your trading experience
             to the next level?</span>"
        >
          <img
            src="/dots.png"
            alt=""
            class="absolute left-0 top-0 h-full w-1/2"
          />
        </OrganismTwoColumn>
        <AtomDownArrow />
      </AtomInner>
    </AtomSection>
    <OrganismFeatures id="features" />
    <AtomDownArrow />
    <AtomSection
      class="relative flex w-full items-center justify-center 2xl:py-64"
      tp="large"
      bp="large"
    >
      <div class="mx-auto w-full max-w-8xl py-10">
        <div class="z-10 mx-auto w-full space-y-10 text-white md:flex">
          <AtomAnimate position="left" class="md:w-1/2">
            <h2 class="gradientText text-sm font-bold uppercase">
              MODERN INTERFACE
            </h2>
            <h3 class="textLarge font-bold uppercase">
              Seamless User Experience
            </h3>
            <div class="textSmall py-6 font-semibold text-gray-400 xl:py-12">
              With every great tool, you need an even sexier UI. Welcome to the
              best of the best user experience, where you’ll never have to leave
              the app again. With a wide array of
              <span class="text-white"> tools, calculators,</span> and
              <span class="text-white">aggregators,</span>
              <span class="gradientText">
                Swift users can enjoy a simple and effective trading experience
                from a single desktop app.
              </span>
            </div>
            <div
              class="mb-8 rounded-md bg-gradient-to-r from-gray-500 to-s-navy py-2"
            />
            <div
              class="texts-gray-400 mb-10 mt-4 border-l-4 border-s-green pl-4 font-bold text-s-green"
            >
              Welcome to a top of the line user experience.
            </div>
            <div class="flex space-x-4">
              <AtomPlainLink
                to="https://www.youtube.com/channel/UCkSgAsnUMN5KxQlapdHfXgg"
                class="btn"
              >
                View on Youtube
              </AtomPlainLink>
              <AtomPlainLink
                to="https://discord.gg/swift-tech"
                class="btn-border"
              >
                Join Discord
              </AtomPlainLink>
            </div>
          </AtomAnimate>
          <AtomAnimate
            position="right"
            class="md:pin-y-center max-w-6xl md:absolute md:-right-24 md:w-1/2"
          >
            <img src="/landing2.png" alt="" class="w-full" />
          </AtomAnimate>
        </div>
      </div>
    </AtomSection>
    <AtomDownArrow class="mb-10" />
    <AtomSection
      bp="large"
      class="gradientSwap transition-all duration-1000 ease-in-out"
    >
      <MoleculeTitle
        id="team"
        title="Meet the team"
        subtitle="Behind Swift"
        description="
        Swift Tech is made up of a passionate team of individuals sharing the
        same goal of revolutionizing the web3 automation space"
      />

      <OrganismTeamSlider />
    </AtomSection>
    <div class="w-full bg-gradient-to-r from-s-pink to-s-violet py-4" />
    <OrganismSlider />
    <AtomSection tp="small" bp="small" class="relative z-10 bg-s-navy">
      <AtomInner>
        <OrganismTwoColumn
          reverse
          class="text-white"
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="For business / support inquiries please contact us via
           discord or at support@swifttech.app"
        >
          <div
            class="mt-10 flex justify-between space-x-4 rounded-md bg-gradient-to-r from-s-violet to-s-pink p-5 text-white"
          >
            <div class="flex flex-col justify-between">
              <div>
                <div class="textSmall font-bold">Follow our Twitter</div>
                <div class="text-xs">Keep up to date with us!</div>
              </div>
              <a
                href="https://twitter.com/SwiftTechApp"
                target="_blank"
                class="textSmall font-bold"
                >@SwiftTechApp</a
              >
            </div>
            <div
              class="flex h-24 w-24 items-center justify-center rounded-md bg-white"
            >
              <AtomIconTwitter class="!w-10 text-s-navy" />
            </div>
          </div>
          <template #right>
            <OrganismFAQ />
          </template>
        </OrganismTwoColumn>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>
