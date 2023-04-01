
<script lang="ts" setup>
// @ts-ignore
import { onMounted, ref } from "#imports";
import Routes from "~/config/routes.js";

const menuitem = ref<Element[]>([]);

onMounted(() => {});
</script>

<template>
  <nav aria-label="Main menu desktop">
    <ul class="flex" role="menubar" aria-label="Main menu desktop">
      <li
        v-for="item in Routes"
        :key="item.href"
        ref="menuitem"
        role="none"
        class="menuitem relative my-1"
      >
        <a
          role="menuitem"
          class="ontline-basic block px-5 py-6 text-sm font-normal hover:text-white-font md:font-light lg:px-8 lg:py-9 lg:text-base"
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
// .menuitem:hover {
//   &::after {
//     width: calc(100% - 3.7em);
//   }
// }
@media (min-width: 1024px) {
  .menuitem:hover {
    &::after {
      width: calc(100% - 3.7em);
    }
  }
}
@media (max-width: 1024px) {
  .menuitem:hover {
    &::after {
      width: calc(100% - 2.2em);
    }
  }
}
.menuitem:last-child {
  @apply -mr-5;
}
</style>