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
              id="a"
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
              NFT automation, Alpha Community, Portfolio Managment
            </h1>
            <div class="textSmall py-6 text-gray-400 xl:py-12">
              Lorem ipsum dolor sit amet consectetur. Sed pretium potenti
              elementum senectus mattis est erat. Vitae non iaculis elit aenean
              aenean pulvinar amet montes consectetur.
            </div>
            <div class="flex space-x-4">
              <AtomPlainLink to="https://opensea.com" class="btn">
                View on OpenSea
              </AtomPlainLink>
              <AtomPlainLink to="https://opensea.com" class="btn-border">
                View on OpenSea
              </AtomPlainLink>
            </div>
            <div class="texts-gray-400 mt-10 border-l-4 border-s-violet pl-4">
              We are currently in free beta. Follow our twitter for upcoming
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
          link="#"
          button-title="Join Discord"
          subtitle="About Us"
          title="Why Swift AIO?"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sint in ad
        hic est aliquid corrupti aspernatur nesciunt ratione sed soluta neque
        labore consequuntur, facere itaque natus voluptate maxime magni!"
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
    <AtomSection
      bp="large"
      class="gradientSwap transition-all duration-1000 ease-in-out"
    >
      <MoleculeTitle
        title="Explore our tools"
        subtitle="MOST COMPLEX TOOLS"
        class=""
      />
      <AtomInner
        class="grid gap-4 text-white sm:grid-cols-2 md:grid-cols-3 md:gap-10 xl:gap-12"
      >
        <MoleculeCard
          image="/1.png"
          subtitle="MANAGE YOUR TASKS"
          title="Multi Chain Minting"
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
        <MoleculeCard
          image="/2.png"
          subtitle="MANAGE YOUR TASKS"
          title="Multi Wallet Handlings"
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
        <MoleculeCard
          image="/3.png"
          subtitle="MANAGE YOUR TASKS"
          title="Fund/Token Management "
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
        <MoleculeCard
          image="/4.png"
          subtitle="MANAGE YOUR TASKS"
          title="In Depth Portfolio Insights"
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
        <MoleculeCard
          image="/5.png"
          subtitle="MANAGE YOUR TASKS"
          title="Bulk Sweep, Sell ,Cancel , Bid "
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
        <MoleculeCard
          image="/6.png"
          subtitle="MANAGE YOUR TASKS"
          title="Multi Platform Minting / Sniping"
          description="Lorem ipsum dolor sit amet consectetur.
           Sed pretium potenti elementum senectus mattis est 
           erat. Vitae non iaculis elit aenean aenean pulvinar
            amet montes consectetur."
        />
      </AtomInner>
    </AtomSection>
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
            <div class="textSmall py-6 text-gray-400 xl:py-12">
              Lorem ipsum dolor sit amet consectetur. Sed pretium potenti
              elementum senectus mattis est erat. Vitae non iaculis elit aenean
              aenean pulvinar amet montes consectetur.
            </div>
            <div
              class="mb-8 rounded-md bg-gradient-to-r from-gray-500 to-s-navy py-2"
            />
            <div
              class="texts-gray-400 mb-10 mt-4 border-l-4 border-s-green pl-4 text-s-green"
            >
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div class="flex space-x-4">
              <AtomPlainLink to="https://opensea.com" class="btn">
                View on OpenSea
              </AtomPlainLink>
              <AtomPlainLink to="https://opensea.com" class="btn-border">
                Join Discord
              </AtomPlainLink>
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
    <AtomDownArrow class="mb-10" />
    <AtomSection
      bp="large"
      class="gradientSwap transition-all duration-1000 ease-in-out"
    >
      <MoleculeTitle title="Meet the team" subtitle="Behind Swift" class="" />
      <AtomInner
        class="grid gap-4 text-white sm:grid-cols-2 md:grid-cols-3 md:gap-10 xl:gap-12"
      >
        <AtomAnimate class="relative">
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
        </AtomAnimate>
        <AtomAnimate class="relative">
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
        </AtomAnimate>
        <AtomAnimate class="relative">
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
        </AtomAnimate>
        <AtomAnimate class="relative">
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
        </AtomAnimate>
        <AtomAnimate class="relative">
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
        </AtomAnimate>
        <AtomAnimate class="relative">
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
        </AtomAnimate>
      </AtomInner>
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
