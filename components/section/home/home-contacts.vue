
<script lang="ts" setup>
import TwitterIcon from "~/assets/icons/twitter.svg?component";
import GithubIcon from "~/assets/icons/github.svg?component";
import LinkedinIcon from "~/assets/icons/linkedin.svg?component";
</script>

<template>
  <div>
    <h3 class="mt-2 text-3xl">Lets connect</h3>
    <ul class="my-5 flex gap-2">
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
</template>

<style lang="scss" scoped>
</style>