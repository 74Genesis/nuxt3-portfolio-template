
<script lang="ts" setup>
import { PropType, FunctionalComponent } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";

interface Snippet {
  langs: FunctionalComponent[];
  stars: Number;
  title: String;
  text: String;
}

defineProps({
  item: {
    type: Object as PropType<Snippet>,
    default: () => {},
  },
});
</script>

<template>
  <div
    role="listitem"
    class="text-md flex flex-col rounded-lg bg-gray-dark-blue p-10 font-extralight"
  >
    <h2 class="text-3xl font-medium">{{ item.title }}</h2>
    <p class="mt-6 grow leading-7">{{ item.text }}</p>
    <div class="mt-12 flex items-center justify-between">
      <ul class="flex">
        <li
          v-for="svg in item?.langs || []"
          :key="String(svg)"
          class="mr-3 rounded-md bg-white p-2"
        >
          <component :is="svg" class="h-6 w-6" aria-hidden="true" />
        </li>
      </ul>
      <div class="flex">
        <StarIcon class="mr-2 h-5 w-5 text-[#FFF615]" aria-hidden="true" />
        <span>{{ item?.stars }} Stars</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>