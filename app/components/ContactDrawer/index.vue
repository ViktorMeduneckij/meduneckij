<template>
  <UDrawer direction="right" :handle="false">
    <UButton icon="i-lucide:message-circle" size="xl" class="cursor-pointer"
      >Contact</UButton
    >
    <template #content>
      <ContactForm />
    </template>
  </UDrawer>
</template>
