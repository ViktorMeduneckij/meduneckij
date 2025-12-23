<script setup lang="ts">
import { SOCIALS } from "~/constants";
</script>

<template>
  <UHeader :to="null" :toggle="{ class: 'hidden' }">
    <template #title>
      <NuxtImg src="/assets/logo.png" alt="Logo" />
    </template>

    <template #right>
      <NuxtLink to="mailto:viktor@meduneckij.lt">viktor@meduneckij.lt</NuxtLink>
      <UButton
        variant="ghost"
        v-for="social in SOCIALS"
        :key="social.label"
        :to="social.url"
        :icon="social.icon"
        :aria-label="`Visit ${social.label} profile`"
        target="_blank"
      />
      <UButton
        icon="material-symbols:picture-as-pdf"
        variant="ghost"
        to="/viktor-meduneckij.pdf"
        aria-label="Download CV as PDF"
        target="_blank"
      />
    </template>
  </UHeader>
</template>
