<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full p-6 backdrop-blur-xl"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center">
      <g-link
        to="/"
        class="-ml-4 w-64 transition-all duration-300 ease-in-out scrolled:w-56 xl:w-56 2xl:w-64 3xl:w-80"
      >
        <g-image src="/logo.png" immediate alt="" class="w-full" />
      </g-link>

      <div
        class="order-2 mr-auto flex w-12 max-w-8xl items-center md:order-none md:w-full"
      >
        <MoleculeSiteMenu />
      </div>
      <div class="flex w-2/3 items-center justify-end md:w-auto">
        <AtomPlainLink
          to="https://dashboard.swifttech.app/"
          class="bg-s-darkpuprle custom-transition whitespace-nowrap rounded-xl border border-s-violet px-3 py-3 text-xs font-bold text-white hover:bg-s-violet md:px-6 md:text-sm"
        >
          Member Dashboard
        </AtomPlainLink>
      </div>
    </div>
  </header>
</template>

<style></style>
