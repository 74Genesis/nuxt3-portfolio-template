
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
    <ul class="flex gap-10 text-center text-sm font-light text-dark-font">
      <li
        v-for="item in list"
        :key="item.title"
        class="relative rounded-lg bg-gray-dark-blue p-3 pt-16"
      >
        <div
          class="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-green to-blue"
        >
          <div
            class="flex h-full w-full items-center justify-center rounded-full bg-gray-dark-blue p-2"
          >
            <component
              :is="item.icon"
              aria-hidden="false"
              class="h-7 w-7 rounded-full"
            />
          </div>
        </div>
        <h5 class="text-lx font-normal text-gray-font">{{ item.title }}</h5>
        <p class="mt-5">
          {{ item.text }}
        </p>
      </li>
    </ul>
    <CoreButton type="icon" class="shrink-0 grow-0 basis-16"
      ><ArrowSmallRightIcon class="h-12 w-12"
    /></CoreButton>
  </div>
</template>

<style lang="scss" scoped>
</style>