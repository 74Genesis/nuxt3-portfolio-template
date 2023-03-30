
<script lang="ts" setup>
import { Bars3Icon } from "@heroicons/vue/20/solid";
import HtmlIcon from "@/assets/icons/html5-outline-icon.svg?component";
import ReactIcon from "@/assets/icons/react-js-icon.svg?component";
import SassIcon from "@/assets/icons/sass-icon.svg?component";
import VueIcon from "@/assets/icons/vue-js-icon.svg?component";

const items = [
  {
    langs: [ReactIcon, SassIcon],
    stars: 3,
    title: "Bolder Landingpage",
    text: "A dead simple for nextjs project.",
  },
  {
    langs: [HtmlIcon, SassIcon],
    stars: 8,
    title: "Frontend Starter Kit",
    text: "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
  },
  {
    langs: [VueIcon, HtmlIcon],
    stars: 4,
    title: "Quisque tempor massa massa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit eros nec erat ultricies laoreet. Nullam erat odio, blandit vitae nisi vel, luctus pharetra tellus. ",
  },
  {
    langs: [ReactIcon, SassIcon, HtmlIcon],
    stars: 6,
    title: "Nextjs Starter 2.0",
    text: "Donec consectetur quis magna eget bibendum. Fusce euismod blandit ornare.",
  },
];
</script>

<template>
  <div>
    <div role="list" class="mb-10 grid grid-cols-2 gap-8">
      <SectionSnippetsItem
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