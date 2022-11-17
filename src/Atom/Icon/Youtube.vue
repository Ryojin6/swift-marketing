<template>
  <a
    :href="link"
    target="_blank"
    class="block w-8 transition-all duration-300 ease-in-out hover:opacity-75 scrolled:w-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      class="fill-current"
    >
      <path
        d="M15 4c-4.186 0-9.62 1.049-9.62 1.049l-.013.015A3.99 3.99 0 0 0 2 9v12.002a4 4 0 0 0 3.377 3.943l.004.006s5.433 1.051 9.619 1.051 9.62-1.05 9.62-1.05l.001-.003A4 4 0 0 0 28 21.002V9a4 4 0 0 0-3.377-3.945l-.004-.006S19.186 4 15 4zm-3 6.398L20 15l-8 4.602v-9.204z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
