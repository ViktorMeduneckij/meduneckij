<script setup lang="ts">
import { SOCIALS } from "~/constants";
</script>

<template>
  <UFooter
    :ui="{
      container: 'lg:py-12',
    }"
  >
    <template #left>
      <NuxtImg
        src="/assets/logo.png"
        alt="Meduneckij"
        class="size-10"
        loading="lazy"
      />
      <p class="text-muted text-sm">
        Meduneckij © {{ new Date().getFullYear() }}
      </p>
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
  </UFooter>
</template>
