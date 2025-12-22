<template>
  <NuxtLink :to="url" target="_blank">
    <div :style="{ backgroundColor: bgColor }">
      <NuxtImg
        v-if="image"
        :src="image"
        alt="Work image"
        class="w-full h-[200px] md:h-[450px] object-contain border-1 border-gray-300 hover:scale-97 transition-all duration-300"
      />
      <slot name="image" />
    </div>
    <p class="text-sm text-gray-500 mt-1">{{ date }}</p>
    <h3 class="font-bold mb-1">{{ title }}</h3>
    <div class="flex flex-wrap gap-2 mb-1 items-center">
      <UIcon name="ic:baseline-computer" class="size-5" />
      <p v-for="tech in techStack" :key="tech" class="text-sm font-semibold">
        {{ tech }}
      </p>
    </div>
    <p class="text-sm text-gray-500 text-[18px]">{{ description }}</p>
    <slot name="cta" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  date: string;
  techStack: string[];
  title: string;
  description: string;
  image?: string;
  bgColor: string;
  url?: string;
}>();
</script>
