<script lang="ts" setup>
import { definePageMeta } from "#imports";
definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <NuxtLayout name="default">
      <template #header>
        <LayoutHeader />
      </template>
      <template #default>
        <SectionHome />
        <SectionProjects />
        <SectionSnippets />
        <SectionMentorship class="mt-16" />
      </template>
      <template #footer>
        <LayoutFooter class="mt-24" />
      </template>
    </NuxtLayout>
  </div>
</template>
