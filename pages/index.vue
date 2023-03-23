<script lang="ts" setup>
import { definePageMeta } from "#imports";
// import { NuxtLayout } from "#nuxt";
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
      <template #default> 123123123 </template>
      <template #footer>
        <LayoutFooter />
      </template>
    </NuxtLayout>
  </div>
</template>
