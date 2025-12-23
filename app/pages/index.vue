<script setup lang="ts">
useHead({
  title: "Viktor Meduneckij | Frontend developer",
  meta: [
    {
      name: "description",
      content:
        "Lithuanian frontend developer with nearly 10 years of experience. I focus on building maintainable, high-performance frontend for web.",
    },
    {
      property: "og:title",
      content: "Viktor Meduneckij | Frontend developer",
    },
    {
      property: "og:description",
      content:
        "Lithuanian frontend developer with nearly 10 years of experience. I focus on building maintainable, high-performance frontend for web.",
    },
    {
      property: "og:image",
      content: "https://www.meduneckij.lt/assets/og-image.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Viktor Meduneckij | Frontend developer",
    },
    {
      name: "twitter:description",
      content:
        "Lithuanian frontend developer with nearly 10 years of experience. I focus on building maintainable, high-performance frontend for web.",
    },
    {
      name: "twitter:image",
      content: "https://www.meduneckij.lt/assets/og-image.png",
    },
  ],
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
