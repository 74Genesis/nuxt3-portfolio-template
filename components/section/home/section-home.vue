
<script lang="ts" setup>
</script>

<template>
  <section class="section-basic">
    <h1 class="welcome-text mt-24 text-[3.2em] font-semibold tracking-wide">
      Hi Im Naufaldi, a special human <br />
      with some ability to love learning and working on teamwork.
    </h1>
    <div class="mt-20 flex">
      <SectionHomeAbout />
      <SectionHomeContacts />
    </div>
    <div class="mt-20 flex">
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