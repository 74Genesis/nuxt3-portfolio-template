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
    <header id="header" class="section-basic">
      <slot name="header" />
    </header>
    <main
      id="main"
      class="flex h-full grow flex-col items-center overflow-y-auto"
    >
      <div class="w-full">
        <slot />
      </div>
    </main>
    <footer id="footer" class="section-basic overflow-hidden">
      <slot name="footer" />
    </footer>
  </div>
</template>
