<template>
  <article>
    <div :style="{ backgroundColor: bgColor }">
      <NuxtImg
        v-if="image"
        :src="image"
        alt="Work image"
        class="w-full h-[200px] md:h-[450px] object-contain"
        loading="lazy"
      />
      <slot name="image" />
    </div>
    <h3 class="font-bold mb-1">{{ title }}</h3>
    <div class="flex flex-wrap gap-2 mb-1 items-center">
      <UIcon name="ic:baseline-computer" class="size-5" />
      <p v-for="tech in techStack" :key="tech" class="text-sm font-semibold">
        {{ tech }}
      </p>
    </div>
    <p class="text-sm text-gray-500 text-[18px] mb-2">{{ summary }}</p>
    <ol v-if="highlights" class="list-disc list-inside min-h-[120px]">
      <li v-for="highlight in highlights" :key="highlight">
        {{ highlight }}
      </li>
    </ol>
    <UButton
      v-if="url"
      icon="lucide:external-link"
      target="_blank"
      class="mt-2"
      size="xl"
      :to="url"
      >View project</UButton
    >
    <UButton
      v-if="githubUrl"
      icon="i-simple-icons:github"
      target="_blank"
      class="mt-2"
      size="xl"
      :to="githubUrl || url"
      >{{ githubUrl ? "View code on GitHub" : "View project" }}
    </UButton>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  techStack: string[];
  title: string;
  image?: string;
  bgColor: string;
  summary?: string;
  highlights?: string[];
  githubUrl?: string;
  url?: string;
}>();
</script>
