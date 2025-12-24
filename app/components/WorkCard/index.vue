<template>
  <article>
    <NuxtLink v-if="url" :to="url" target="_blank">
      <div :style="{ backgroundColor: bgColor }">
        <NuxtImg
          v-if="image"
          :src="image"
          alt="Work image"
          class="w-full h-[200px] md:h-[450px] object-contain hover:scale-97 transition-all duration-300 border-1 border-gray-300"
          loading="lazy"
        />
        <slot name="image" />
      </div>
    </NuxtLink>
    <div v-else :style="{ backgroundColor: bgColor }">
      <NuxtImg
        v-if="image"
        :src="image"
        alt="Work image"
        class="w-full h-[200px] md:h-[450px] object-contain hover:scale-97 transition-all duration-300 border-1 border-gray-300"
        loading="lazy"
      />
      <slot name="image" />
    </div>
    <p class="text-sm text-gray-500 mt-1">{{ date }}</p>
    <NuxtLink v-if="url" :to="url" target="_blank">
      <h3 class="font-bold mb-1">{{ title }}</h3>
    </NuxtLink>
    <h3 v-else class="font-bold mb-1">{{ title }}</h3>
    <div class="flex flex-wrap gap-2 mb-1 items-center">
      <UIcon name="ic:baseline-computer" class="size-5" />
      <p v-for="tech in techStack" :key="tech" class="text-sm font-semibold">
        {{ tech }}
      </p>
    </div>
    <p class="text-sm text-gray-500 text-[18px] mb-2">{{ summary }}</p>
    <ol v-if="highlights" class="list-disc list-inside">
      <li v-for="highlight in highlights" :key="highlight">
        {{ highlight }}
      </li>
    </ol>
    <slot name="cta" />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  date: string;
  techStack?: string[];
  title: string;
  image?: string;
  bgColor: string;
  url?: string;
  summary?: string;
  highlights?: string[];
}>();
</script>
