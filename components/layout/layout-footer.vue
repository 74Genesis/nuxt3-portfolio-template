
<script lang="ts" setup>
// @ts-ignore
import { onMounted } from "#imports";
import TwitterIcon from "~/assets/icons/twitter.svg?component";
import GithubIcon from "~/assets/icons/github.svg?component";
import LinkedinIcon from "~/assets/icons/linkedin.svg?component";

onMounted(() => {});
</script>

<template>
  <div class="relative flex justify-center">
    <hr class="absolute top-0 left-0 h-[1px] w-full border-white/20" />
    <div class="flex flex-col items-center text-sm font-light">
      <LayoutDesktopFooterMenu class="mt-10" />
      <p class="mt-5">Reach me out</p>
      <ul class="mt-1 mb-5 flex gap-2">
        <li>
          <a
            href="#"
            class="ontline-basic block rounded-md border border-transparent p-2 hover:border-white/80"
          >
            <TwitterIcon
          /></a>
        </li>
        <li>
          <a
            href="#"
            class="ontline-basic block rounded-md border border-transparent p-2 hover:border-white/80"
          >
            <GithubIcon
          /></a>
        </li>
        <li>
          <a
            href="#"
            class="ontline-basic block rounded-md border border-transparent p-2 hover:border-white/80"
          >
            <LinkedinIcon
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
</style>
