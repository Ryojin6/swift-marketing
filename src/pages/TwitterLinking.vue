<template>
  <TemplateDefault class="relative">
    <AtomSection
      class="gradientSwap relative flex h-screen flex-col items-center"
      tp="large"
      bp="large"
    >
      <g-link
        to="/"
        class="scrolled: mb-10 w-56 transition-all duration-300 ease-in-out 2xl:w-64 3xl:w-80"
      >
        <g-image
          src="~/images/animated-logo.svg"
          immediate
          alt=""
          class="w-full"
        />
      </g-link>
      <MoleculeTitle
        v-if="success === 'true'"
        title="Success 🚀"
        class="text-white"
      />
      <MoleculeTitle v-else title="Error 😔" class="text-white" />
      <div v-if="success === 'true'" class="textMedium text-white">
        <a
          target="_blank"
          :href="'https://twitter.com/' + twitter"
          class="text-black"
        >
          @{{ twitter }}
        </a>
        has been successfully linked to your account.
      </div>
      <div v-else class="textMedium pt-4 text-white">
        {{ error }}
      </div>
      <AtomPlainLink to="/" class="btn mt-10"> Back To Homepage </AtomPlainLink>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
export default {
  data() {
    return {
      success: '',
      twitter: '',
      error: '',
    };
  },
  mounted() {
    this.success = this.$route.query.success;
    this.twitter = this.$route.query.twitter;
    this.error = this.$route.query.message;
  },
};
</script>
