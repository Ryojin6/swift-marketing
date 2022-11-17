<template>
  <AtomSection
    bp="large"
    class="gradientSwap transition-all duration-1000 ease-in-out"
  >
    <MoleculeTitle
      title="Explore our tools"
      subtitle="MOST COMPLEX TOOLS"
      class=""
    />
    <div class="mb-6 flex items-center justify-center space-x-2">
      <button
        :class="
          selected === 'features'
            ? 'bg-s-navyLight text-s-purple'
            : 'bg-s-navy text-white'
        "
        @click="selected = 'features'"
        type="button"
        class="custom-transition m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple px-10 py-4 hover:scale-105"
      >
        Features
      </button>
      <button
        :class="
          selected === 'modules'
            ? 'bg-s-navyLight text-s-purple'
            : 'bg-s-navy text-white'
        "
        @click="selected = 'modules'"
        type="button"
        class="custom-transition m-4 flex items-center space-x-4 rounded-md border border-s-darkpurple px-10 py-4 hover:scale-105"
      >
        Modules
      </button>
    </div>
    <OrganismFeaturesSlider v-if="selected === 'features'" />
    <OrganismModulesSlider v-else />
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      selected: 'features',
    };
  },
};
</script>
