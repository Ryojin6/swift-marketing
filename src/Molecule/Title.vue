<template>
  <AtomAnimate class="mx-auto max-w-6xl pb-10 text-center xl:pb-20">
    <div class="font-machina font-bold md:text-xl 2xl:text-2xl" v-if="subtitle">
      {{ subtitle }}
    </div>
    <h2
      class="font-machina"
      :class="subtitle ? 'text-4xl xl:text-5xl 3xl:text-6xl' : 'textXLarge'"
    >
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
