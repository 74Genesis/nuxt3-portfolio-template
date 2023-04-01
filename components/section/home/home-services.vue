
<script lang="ts" setup>
import {
  ArrowSmallRightIcon,
  GlobeAmericasIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid";

const list = [
  {
    title: "Web development",
    text: "You will receive a customized plan for your fitness journey, and lots of support.",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Ui Research",
    text: "You will receive a customized plan for your fitness journey, and lots of support.",
    icon: ClipboardDocumentIcon,
  },
];
</script>

<template>
  <div class="flex items-center gap-7">
    <ul
      class="flex flex-col gap-20 text-center text-sm font-light text-dark-font md:flex-row md:gap-7"
    >
      <li
        v-for="item in list"
        :key="item.title"
        class="relative w-full rounded-lg bg-gray-dark-blue p-7 pt-16 md:w-64 md:p-3 md:pt-16"
      >
        <div
          class="absolute left-1/2 top-0 flex h-[5em] w-[5em] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-tr from-green to-blue"
        >
          <div
            class="flex h-[4.8em] w-[4.8em] items-center justify-center rounded-full bg-gray-dark-blue p-2"
          >
            <component
              :is="item.icon"
              aria-hidden="false"
              class="h-7 w-7 rounded-full"
            />
          </div>
        </div>
        <h5 class="text-base font-normal tracking-wide text-gray-font">
          {{ item.title }}
        </h5>
        <p class="mt-3 font-extralight leading-6 text-dark-font/60">
          {{ item.text }}
        </p>
      </li>
    </ul>
    <CoreButton type="icon" class="hidden shrink-0 grow-0 basis-16 md:visible">
      <ArrowSmallRightIcon class="h-12 w-12" />
    </CoreButton>
  </div>
</template>

<style lang="scss" scoped>
</style>