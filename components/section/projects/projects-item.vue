
<script lang="ts" setup>
import { PropType } from "vue";
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";

interface Project {
  img: string;
  category: string;
  title: string;
  text: string;
}

defineProps({
  item: {
    type: Object as PropType<Project>,
    default: () => {},
  },
});
</script>

<template>
  <div role="listitem" class="mb-10 flex gap-7">
    <a href="#project" class="relative shrink-0 grow-0 basis-6/12">
      <img
        :src="item?.img"
        :alt="item?.title"
        class="h-72 w-full object-cover"
      />
      <span
        class="pointer-events-none absolute top-2 right-2 rounded-md bg-gr-600 p-1.5"
      >
        <ArrowUpRightIcon class="h-5 w-5" aria-hidden="true" />
      </span>
    </a>
    <div>
      <div class="mt-5 font-light text-white/60">{{ item?.category }}</div>
      <h2 class="mt-5 text-4xl">{{ item?.title }}</h2>
      <p class="mt-8 font-extralight leading-8">{{ item?.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>