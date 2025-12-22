<script setup lang="ts">
const links = [
  {
    to: "#contact",
    label: "Contact",
    icon: "i-lucide:message-circle",
  },
];
</script>

<template>
  <UPageHero
    orientation="horizontal"
    title="Frontend developer"
    description="I build maintainable, high-performance frontend products."
    :ui="{
      container: 'px-0 sm:px-0 md:px-0 lg:px-0',
      description: 'max-w-[200px] sm:max-w-[unset]',
    }"
  >
    <template #links>
      <ContactDrawer />
    </template>
  </UPageHero>
  <div
    class="absolute top-[var(--ui-header-height)] right-0 w-full h-full pointer-events-none z-[-1] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] max-w-[50%] lg:max-w-[80%]"
  >
    <NuxtImg
      src="/assets/waves-haikei.svg"
      alt="Hero image"
      class="w-full h-full object-cover"
    />
  </div>
</template>
