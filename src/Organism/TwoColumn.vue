<template>
  <AtomAnimate class="relative">
    <div
      class="flex flex-col items-center px-4 lg:flex-row lg:space-x-16"
      :class="{ 'lg:flex-row-reverse lg:space-x-reverse': reverse }"
    >
      <div class="lg:w-1/2">
        <img :src="image" alt="" v-if="image" />
        <slot name="right" />
      </div>
      <div class="flex flex-col pt-16 lg:w-1/2 lg:pt-0">
        <h2 v-if="subtitle" class="gradientText text-sm font-bold uppercase">
          {{ subtitle }}
        </h2>
        <h3 class="textLarge font-bold uppercase">
          {{ title }}
        </h3>
        <div class="textSmall prose pt-6 text-gray-400" v-html="description" />
        <AtomPlainLink :to="link" class="btn z-20 mt-10 self-start" v-if="link">
          {{ buttonTitle }}
        </AtomPlainLink>
        <slot />
      </div>
    </div>
  </AtomAnimate>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    buttonTitle: {
      type: String,
      default: '',
    },
    secondLink: {
      type: String,
      default: '',
    },
    secondButtonTitle: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
