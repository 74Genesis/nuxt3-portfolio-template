
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "link",
    validator: (val) => ["link", "button", "icon"].includes(String(val)),
  },
  color: {
    type: String,
    default: "blue",
    validator: (val) => ["blue", "green"].includes(String(val)),
  },
  href: {
    type: String,
    default: undefined,
  },
});

function root() {
  if (props.type === "link") {
    return "a";
  }
  if (props.type === "button") {
    return "button";
  }
  return "div";
}
</script>

<template>
  <component
    :is="root()"
    :href="href"
    class="ontline-basic outline-offset-4"
    :class="['type-' + type, 'color-' + color]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.type-link {
  @apply underline underline-offset-2;
  &:hover {
    @apply no-underline;
  }
}

.type-link.color-blue {
  @apply text-link-active;
  &:visited {
    @apply text-link-visited;
  }
}
.type-link.color-green {
  @apply text-link-green-active;
  &:visited {
    @apply text-link-green-visited;
  }
}
</style>