<script setup lang="ts">
useSeoMeta({
  title: "Viktor Meduneckij | Frontend developer",
  ogTitle: "Viktor Meduneckij | Frontend developer",
  description:
    "Lithuanian frontend developer with nearly 10 years of experience. I focus on building maintainable, high-performance frontend for web.",
  ogDescription:
    "Lithuanian frontend developer with nearly 10 years of experience. I focus on building maintainable, high-performance frontend for web.",
  ogImage: "https://www.meduneckij.lt/assets/og-image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section>
    <Hero />
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
