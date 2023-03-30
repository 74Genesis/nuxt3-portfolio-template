
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
  size: {
    type: String,
    default: "md",
    validator: (val) => ["sm", "md"].includes(String(val)),
  },
  href: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: "",
  },
});

function root() {
  if (["link", "icon"].includes(props.type)) {
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
    :aria-label="label"
    class="ontline-basic inline-flex items-center outline-offset-4"
    :class="['type-' + type, 'color-' + color, 'size-' + size]"
  >
    <div v-if="$slots.iconBefore">
      <slot name="iconBefore" />
    </div>
    <span>
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
.type-link {
  @apply underline underline-offset-2;
  &:hover {
    @apply no-underline;
  }
}
.type-button {
  @apply px-3 py-2 rounded-md bg-gray-dark-blue text-sm font-extralight border-2 border-transparent;
  &:hover {
    @apply border-2 cursor-pointer border-white;
  }
  &:active {
    @apply scale-95;
  }
}
.type-icon {
  @apply p-3 rounded-md border border-transparent;
  &.size-sm {
    @apply p-2;
  }
  &:hover {
    @apply border cursor-pointer border-white;
  }
  &:active {
    @apply scale-95;
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