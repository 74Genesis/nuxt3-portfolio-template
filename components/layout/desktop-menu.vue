
<script lang="ts" setup>
// @ts-ignore
import { onMounted, ref } from "#imports";

const menuitem = ref<Element[]>([]);

const menu = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "Code snippets", href: "#code" },
  { title: "Mentorship", href: "#mentorship" },
  { title: "Blog", href: "#blog" },
];

onMounted(() => {});
</script>

<template>
  <nav aria-label="Main menu desktop">
    <ul class="flex" role="menubar" aria-label="Main menu desktop">
      <li
        v-for="item in menu"
        :key="item.href"
        ref="menuitem"
        role="none"
        class="menuitem relative my-1"
      >
        <a
          role="menuitem"
          class="ontline-basic block px-8 py-9 hover:text-white-font"
          :href="item.href"
          tabindex="0"
          title="Home"
          aria-current="page"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menuitem::after {
  content: "";
  position: absolute;
  top: 65%;
  height: 1.5px;
  width: 0;
  transition: width 0.5s cubic-bezier(0, 1.54, 0.64, 0.98);
  left: 50%;
  transform: translateX(-50%);
  @apply bg-gray-font;
}
.menuitem:hover {
  &::after {
    width: calc(100% - 3.7em);
  }
}
.menuitem:last-child {
  @apply -mr-5;
}
</style>