
<script lang="ts" setup>
import TwitterIcon from "~/assets/icons/twitter.svg?component";
import GithubIcon from "~/assets/icons/github.svg?component";
import LinkedinIcon from "~/assets/icons/linkedin.svg?component";
</script>

<template>
  <div>
    <h3>Lets connect</h3>
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
</template>

<style lang="scss" scoped>
</style>