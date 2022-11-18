<template>
  <div class="bg-s-charcoal">
    <div class="marquee-content relative w-full py-4" id="partners">
      <div
        v-for="i in 5"
        class="marquee-item m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
      >
        <div class="h-16 w-16 bg-white/10" />
        <div class="text-sm font-bold">Placeholder</div>
      </div>
      <div
        class="marquee-item m-4 flex w-full items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white"
      >
        <div class="w-16 bg-white/10"><img src="/divine.png" alt="" /></div>
        <div class="no-mouse w-16 text-sm font-bold">Divine Providence</div>
      </div>
      <div
        v-for="i in 5"
        class="marquee-item m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple bg-s-navyLight p-4 text-white blur-sm"
      >
        <div class="h-16 w-16 bg-white/10" />
        <div class="text-sm font-bold">Placeholder</div>
      </div>
    </div>
  </div>
</template>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
.no-mouse {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.marquee-content {
  display: flex;
  animation: scrolling 50s linear infinite;
}

.marquee-item {
  flex: 0 0 16vw;
  margin: 0 1vw;
  /*   flex: 0 0 20vw; */
  /*   margin: 0 2vw; */
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translatex(-144vw);
  }
}
</style>
