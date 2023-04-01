
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
    <div class="flex flex-col items-center text-sm font-light">
      <LayoutDesktopFooterMenu class="mt-10" />
      <p class="mt-10 md:mt-5">Reach me out:</p>
      <ul class="mt-4 mb-5 flex gap-2 md:mt-2">
        <li>
          <CoreButton type="icon" size="sm" href="#">
            <TwitterIcon class="block h-6 w-6" />
          </CoreButton>
        </li>
        <li>
          <CoreButton type="icon" size="sm" href="#">
            <GithubIcon class="block h-6 w-6" />
          </CoreButton>
        </li>
        <li>
          <CoreButton type="icon" size="sm" href="#">
            <LinkedinIcon class="m-0.5 block h-5 w-5" />
          </CoreButton>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
</style>
