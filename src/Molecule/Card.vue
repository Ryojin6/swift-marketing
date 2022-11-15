<template>
  <div class="relative">
    <div class="flex flex-col items-center px-4">
      <div class="w-full">
        <img :src="image" alt="" class="w-full" />
      </div>
      <div class="flex w-full flex-col pt-6">
        <h2 v-if="subtitle" class="text-sm font-bold uppercase text-s-blue">
          {{ subtitle }}
        </h2>
        <h3 class="textMedium font-bold uppercase">
          {{ title }}
        </h3>
        <div
          class="textSmall prose w-full max-w-none pt-6 !text-gray-500"
          v-html="description"
        />
        <AtomPlainLink :to="link" class="btn mt-10 self-start" v-if="link">
          {{ buttonTitle }}
        </AtomPlainLink>
      </div>
    </div>
  </div>
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
