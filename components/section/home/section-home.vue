
<script lang="ts" setup>
</script>

<template>
  <section class="section-basic">
    <h1 class="welcome-text mt-24 text-[3em] font-semibold tracking-wide">
      Hi, Im a Software Developer, a special human with some ability to love
      learning and working on teamwork.
    </h1>
    <div class="mt-20 flex gap-20">
      <SectionHomeAbout class="max-w-2xl" />
      <SectionHomeContacts />
    </div>
    <div class="mt-20 flex gap-20">
      <SectionHomeExperience />
      <SectionHomeServices />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome-text {
  background-image: linear-gradient(160deg, #3bf686, #4ca9ff);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>