<script setup lang="ts">
const links = [
  {
    to: "#contact",
    label: "Let's talk business",
    icon: "i-lucide:message-circle",
  },
];
</script>

<template>
  <section>
    <UPageHero
      title="Frontend developer"
      description="I build maintainable, high performance frontend solutions."
      :links="links"
      :ui="{
        container: 'lg:py-12',
      }"
    />
  </section>
  <section>
    <MeAsADeveloper />
  </section>
  <section class="mt-24">
    <PastEmployment />
  </section>
  <section class="mt-24">
    <MyProjects />
  </section>
  <section class="mt-24">
    <Quotes />
  </section>
</template>
