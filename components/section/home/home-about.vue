
<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col items-center md:flex-row">
    <div
      class="mr-7 h-40 shrink-0 grow-0 basis-40 rounded-full bg-gradient-to-tr from-green to-blue"
    >
      <img
        src="/images/dev.jpeg"
        alt="Biography"
        aria-hidden="true"
        class="block h-full w-full rounded-full p-1"
      />
    </div>
    <div class="text-center md:text-left">
      <h3 class="mt-5 text-2xl md:mt-2 md:text-3xl">Biography</h3>
      <p class="mt-6 font-extralight leading-7 md:font-normal">
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on
        managing team. Exicited on
        <CoreButton href="/#react">React</CoreButton>,
        <CoreButton href="/#ux">UX Research</CoreButton> and
        <CoreButton href="/#aglie" color="green">Aglie</CoreButton>.
      </p>
    </div>
  </div>
</template>
