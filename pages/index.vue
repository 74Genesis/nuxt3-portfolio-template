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
      </template>
      <template #footer>
        <LayoutFooter />
      </template>
    </NuxtLayout>
  </div>
</template>
