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
    <footer id="footer" class="relative">
      <hr class="absolute top-0 left-0 h-[1px] w-full border-white/20" />
      <div class="section-basic">
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>
