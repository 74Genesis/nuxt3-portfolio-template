
<script lang="ts" setup>
import { Bars3Icon } from "@heroicons/vue/20/solid";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
const items = [
  {
    img: (config.app.baseURL || "/") + "projects/pr1.jpeg",
    category: "Web development",
    title: "Bolder Landingpage",
    text: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
  },
  {
    img: (config.app.baseURL || "/") + "projects/pr2.jpeg",
    category: "Web development",
    title: "Kerja Mantul Education Management",
    text: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
  },
];
</script>

<template>
  <div>
    <div role="list">
      <SectionProjectsItem
        v-for="item in items"
        :key="item.title"
        :item="item"
      />
    </div>
    <CoreButton type="button">
      <template #iconBefore>
        <Bars3Icon class="mr-2 h-4 w-4" />
      </template>
      <template #default> See more </template>
    </CoreButton>
  </div>
</template>

<style lang="scss" scoped>
</style>