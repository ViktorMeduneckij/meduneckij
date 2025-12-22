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
  <section>
    <div class="">
      <UPageHero
        orientation="horizontal"
        title="Frontend developer"
        description="I build maintainable, high performance frontend solutions."
        :links="links"
        :ui="{
          container: 'px-0',
        }"
      />
      <div
        class="absolute top-[var(--ui-header-height)] right-0 w-full h-full pointer-events-none z-[-1] max-h-[400px] lg:max-h-[600px] max-w-[50%] lg:max-w-[80%]"
      >
        <NuxtImg
          src="/assets/waves-haikei.svg"
          alt="Hero image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
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
