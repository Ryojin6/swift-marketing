<template>
  <TemplateDefault class="relative" homepage>
    <AtomSection
      class="relative flex w-full items-center justify-center 2xl:py-64"
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
      <div class="mx-auto w-full max-w-8xl py-10">
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
      tp="large"
      bp="large"
      class="relative z-10 bg-s-navy"
      id="about"
    >
      <AtomInner>
        <OrganismTwoColumn
          reverse
          class="text-white"
          image="/about.png"
          subtitle="About Us"
          title="Why Swift AIO?"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sint in ad
        hic est aliquid corrupti aspernatur nesciunt ratione sed soluta neque
        labore consequuntur, facere itaque natus voluptate maxime magni!"
        />
      </AtomInner>
    </AtomSection>
    <AtomSection
      id="why-us"
      tp="large"
      bp="large"
      class="gradientSwap transition-all duration-1000 ease-in-out"
    >
      <MoleculeTitle title="Why Choose Us?" class="text-white" />
      <AtomInner>
        <OrganismWhyUsCards />
      </AtomInner>
    </AtomSection>
    <OrganismPackages />
    <AtomSection
      id="about"
      tp="large"
      bp="large"
      class="bg-lab-navy justify-between text-white md:flex md:space-x-20 xl:space-x-32"
    >
      <div class="md:w-1/3 md:text-left">
        <MoleculeTitle class="md:text-left" title="LightLabs Track Record" />
      </div>
      <div class="space-y-10 text-center md:w-2/3">
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">20+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Discords Built & Audited
          </span>
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">1m+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Community Members Managed</span
          >
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">120+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Bots Developed
          </span>
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">$10m+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Generated For Projects</span
          >
        </AtomAnimate>
      </div>
    </AtomSection>
    <OrganismTestimonials id="testimonials" class="" />

    <AtomSection tp="large" bp="large" class="bg-lab-navy" id="team">
      <MoleculeTitle title="Meet the team" class="text-white" />
      <AtomInner class="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full">
              <g-image
                src="~/images/goose.jpg"
                immediate
                alt=""
                class="rounded-full"
              />
            </div>
            <h4 class="textMedium text-lab-pink">Goose</h4>
            <div class="textSmall pt-4">CEO, Co-Founder</div>
            <AtomIconTwitter
              link="https://twitter.com/goosexbt"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full">
              <g-image
                src="~/images/karmon.jpg"
                immediate
                alt=""
                class="rounded-full"
              />
            </div>
            <h4 class="textMedium text-lab-pink">
              Karmon <span class="text-base"> (Abdulkarim)</span>
            </h4>
            <div class="textSmall pt-4">CTO, Co-Founder</div>
            <AtomIconTwitter
              link="https://twitter.com/karmonxp"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full">
              <g-image
                src="~/images/james.jpg"
                immediate
                alt=""
                class="rounded-full"
              />
            </div>
            <h4 class="textMedium text-lab-pink">James</h4>
            <div class="textSmall pt-4">CMO, Partner</div>
            <AtomIconTwitter
              link="https://twitter.com/JamesCiesluk"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full">
              <g-image
                src="~/images/ryo.jpg"
                immediate
                alt=""
                class="rounded-full"
              />
            </div>
            <h4 class="textMedium text-lab-pink">Ryojin</h4>
            <div class="textSmall pt-4">Head Web Developer</div>
            <AtomIconTwitter
              link="https://twitter.com/Ryojn6"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection
      tp="large"
      bp="large"
      class="bg-lab-pink flex h-screen items-center justify-center overflow-hidden"
    >
      <AtomInner class="relative">
        <AtomAnimate
          class="relative z-10 mx-auto h-full max-w-5xl"
          position="left"
        >
          <h2 class="textXLarge relative z-10">
            All you have to do
            <span class="font-machina block">is say hey!</span>
          </h2>
          <AtomAnimate class="mt-10 flex w-full space-x-6">
            <AtomPlainLink
              to="https://discord.gg/3v2KnwSyPb"
              class="btn btn-lightpink"
            >
              Discord
            </AtomPlainLink>
            <AtomPlainLink to="#form" class="btn"> Contact Us </AtomPlainLink>
          </AtomAnimate>
        </AtomAnimate>
        <div
          v-aos
          class="pin-y-center absolute right-10 h-[70rem] w-[70rem] rounded-full transition-all duration-[2000ms] ease-in-out"
          aos-from="opacity-0 shadow-xl"
          aos-to="opacity-100 shadow-none  bg-white"
        >
          <div
            class="pin-center bg-lab-pink absolute mx-auto h-[35rem] w-[35rem] rounded-full"
          />
        </div>
      </AtomInner>
    </AtomSection>
    <AtomSection
      tp="large"
      bp="large"
      class="text-lab-navy flex items-center justify-center overflow-hidden"
    >
      <AtomInner class="relative">
        <MoleculeTitle title="Contact Us" class="" />

        <AtomAnimate class="relative z-10 mx-auto h-full max-w-5xl">
          <OrganismForm />
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>
