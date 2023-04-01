
<script lang="ts" setup>
import Routes from "~/config/routes.js";
import { ref, useNuxtApp } from "#imports";
const nuxtApp = useNuxtApp();

const menuitem = ref<Element[]>([]);
</script>

<template>
  <nav
    aria-label="main menu mobile"
    class="fixed left-0 bottom-0 z-50 w-full bg-[#232323] px-2"
  >
    <ul
      class="flex justify-between"
      role="menubar"
      aria-label="Main menu desktop"
    >
      <li
        v-for="item in Routes"
        :key="item.href"
        ref="menuitem"
        role="none"
        class="relative my-2 shrink-0 grow-0 basis-1/4"
      >
        <a
          role="menuitem"
          class="ontline-basic inline-flex w-full flex-col items-center rounded-md border-2 border-transparent px-1 py-2 text-center text-sm font-light"
          :class="
            nuxtApp.$routing.isActive(item)
              ? 'text-white border-white/80'
              : 'text-white/60'
          "
          :href="item.href"
          tabindex="0"
          title="Home"
          aria-current="page"
          :aria-label="'menu item ' + item.title"
        >
          <component :is="item.icon" class="mb-2 h-6 w-6" aria-hidden="true" />
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
</style>