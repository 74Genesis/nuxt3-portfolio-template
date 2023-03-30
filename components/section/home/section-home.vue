
<script lang="ts" setup>
</script>

<template>
  <section class="section-basic">
    <h1 class="welcome-text">
      Hi, Im a Software Developer, a special human with some ability to love
      learning and working on teamwork.
    </h1>
    <div class="mt-20 flex flex-col gap-20 md:flex-row">
      <SectionHomeAbout class="order-2 max-w-2xl md:order-1" />
      <SectionHomeContacts class="order-1 md:order-2" />
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
  @apply mt-10 text-xl font-semibold leading-normal tracking-wide md:mt-24 md:text-3xl md:leading-relaxed lg:text-[3em] text-center md:text-left;
}
</style>