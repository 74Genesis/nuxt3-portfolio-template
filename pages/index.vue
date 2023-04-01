<script lang="ts" setup>
import { definePageMeta, onMounted, useNuxtApp } from "#imports";
const nuxtApp = useNuxtApp();

onMounted(() => {
  nuxtApp.$routing.init();
});

definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <NuxtLayout name="default">
      <template #header>
        <LayoutHeader class="hidden md:flex" />
      </template>
      <template #default>
        <LayoutMobileMenu class="visible md:hidden" />
        <SectionHome id="home" class="mb-16 md:mb-28" />
        <SectionProjects id="projects" class="mb-16 md:mb-24" />
        <SectionSnippets id="code" class="mb-16 md:mb-24" />
        <SectionMentorship id="mentorship" class="mb-16 md:mb-24" />
      </template>
      <template #footer>
        <LayoutFooter class="mb-20 md:mb-0" />
      </template>
    </NuxtLayout>
  </div>
</template>
