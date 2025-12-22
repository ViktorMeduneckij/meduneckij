<script setup lang="ts">
import { SOCIALS } from "~/constants";
</script>

<template>
  <UHeader
    :toggle="{
      class: 'display-none',
    }"
  >
    <template #title>
      <NuxtImg src="/assets/logo.png" alt="Logo" />
    </template>
    <template #right>
      <UButton
        variant="ghost"
        v-for="social in SOCIALS"
        :key="social.label"
        :to="social.url"
        :icon="social.icon"
        target="_blank"
      />
    </template>
  </UHeader>
</template>
