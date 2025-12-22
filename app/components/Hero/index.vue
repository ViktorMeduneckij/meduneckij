<template>
  <UPageHero
    orientation="horizontal"
    title="Frontend developer"
    description="I build maintainable, high performance frontend for real products."
    :ui="{
      container: 'px-0 sm:px-0 md:px-0 lg:px-0',
      description: 'max-w-[200px] sm:max-w-[unset]',
    }"
  >
    <template #links>
      <ContactDrawer />
      <UButton
        icon="material-symbols:picture-as-pdf"
        variant="outline"
        size="xl"
        to="/viktor-meduneckij.pdf"
        target="_blank"
      >
        Download CV
      </UButton>
    </template>
  </UPageHero>
  <div
    class="absolute top-[var(--ui-header-height)] right-0 w-full h-full pointer-events-none z-[-1] max-h-[500px] lg:max-h-[600px] max-w-[50%] lg:max-w-[80%]"
  >
    <NuxtImg
      src="/assets/waves-haikei.svg"
      alt="Hero image"
      class="w-full h-full object-cover"
      preload
      loading="eager"
      fetch-priority="high"
    />
  </div>
</template>
