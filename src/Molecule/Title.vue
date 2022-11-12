<template>
  <AtomAnimate class="mx-auto max-w-6xl pb-10 text-center xl:pb-20">
    <div class="gradientText font-bold md:text-xl 2xl:text-2xl" v-if="subtitle">
      {{ subtitle }}
    </div>
    <h2 class="textXLarge font-bold text-white">
      {{ title }}
    </h2>
  </AtomAnimate>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>
