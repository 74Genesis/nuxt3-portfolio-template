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
        <SectionHome class="mb-28" />
        <SectionProjects class="mb-24" />
        <SectionSnippets class="mb-24" />
        <SectionMentorship class="mb-24" />
      </template>
      <template #footer>
        <LayoutFooter />
      </template>
    </NuxtLayout>
  </div>
</template>
