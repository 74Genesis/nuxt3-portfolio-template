
<script lang="ts" setup>
import {
  GlobeAmericasIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid";
import ManIcon from "~/assets/icons/man.svg?component";

const list = [
  {
    title: "Web development",
    text: "You will receive a customized plan for your fitness journey, and lots of support. Customized plan for your fitness journey, and lots of support.",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Html markups",
    text: "You will receive a customized plan for your fitness journey, and lots of support.",
    icon: ClipboardDocumentIcon,
  },
  {
    title: "Accessibility adaptation",
    text: "Aliquam pretium leo a quam porta egestas. Cras volutpat arcu ac consectetur vestibulum. Fusce eget maximus orci. Sed ut metus quam.",
    icon: ClipboardDocumentIcon,
  },
];
</script>

<template>
  <section class="section-basic">
    <div class="flex">
      <div class="mr-24">
        <h2 class="text-4xl">Developer Mentorship</h2>
        <ManIcon class="-ml-3 w-80" aria-hidden="true" />
      </div>
      <div class="">
        <ul class="flex flex-col gap-7 text-sm font-light text-dark-font">
          <li
            v-for="item in list"
            :key="item.title"
            class="relative flex min-h-[7rem] w-full flex-col justify-center rounded-lg bg-gray-dark-blue p-3 pl-16"
          >
            <div
              class="absolute left-0 top-1/2 flex h-[5em] w-[5em] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-tr from-green to-blue"
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
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>