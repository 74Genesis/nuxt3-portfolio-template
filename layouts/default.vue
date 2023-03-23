<script lang="ts" setup>
import { useHeadSafe } from "#imports";
useHeadSafe({
  bodyAttrs: {
    class: "bg-gray-dark",
  },
});
</script>

<template>
  <div class="relative mx-auto flex min-h-screen w-full grow flex-col shadow">
    <header
      id="header"
      class="mx-auto flex w-full max-w-7xl flex-col justify-center"
    >
      <slot name="header" />
    </header>
    <main
      id="main"
      class="flex h-full grow flex-col items-center overflow-y-auto"
    >
      <div class="w-full md:mb-6 md:p-10">
        <NuxtPage />
      </div>
    </main>
    <footer id="footer" class="bg-red-800">
      <slot name="footer" />
    </footer>
  </div>
</template>
