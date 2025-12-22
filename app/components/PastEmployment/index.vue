<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { PAST_EMPLOYMENT } from "./config";

const isDesktop = useMediaQuery("(min-width: 769px)");
</script>

<template>
  <h2 class="font-semibold mb-3">Past employment</h2>
  <p>
    I have worked on client projects, worked on companies' products. I have
    worked with small teams and conducted business across different departments
    and countries.
  </p>
  <ClientOnly>
    <UTimeline
      :orientation="isDesktop ? 'horizontal' : 'vertical'"
      :items="PAST_EMPLOYMENT"
      color="secondary"
      size="3xl"
      class="mt-12"
      :ui="{
        title: 'text-lg font-bold',
        description: 'text-base',
      }"
    />
  </ClientOnly>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
    <WorkCard
      v-for="item in PAST_EMPLOYMENT.filter((employment) => employment.isWork)"
      :key="item.title"
      :date="item.date"
      :title="item.title"
      :description="item.jobDescription || ''"
      :techStack="item.techStack || []"
      :image="item.image || ''"
      :bgColor="item.bgColor || ''"
      :url="item.url || ''"
    />
    <WorkCard
      :key="'your-business'"
      date="????"
      title="Your business"
      description="I'm open to new opportunities. If you have a project that you want to discuss, please contact me."
      :techStack="['Web development']"
      bgColor="#FFF"
    >
      <template #image>
        <div
          class="w-full h-[200px] md:h-[450px] object-cover border-dashed border-2 border-gray-300"
        >
          <h3 class="font-bold flex justify-center items-center h-full">
            Your business.
          </h3>
        </div>
      </template>
      <template #cta>
        <UButton size="xl" class="mt-2" icon="lucide:message-circle"
          >Let's talk</UButton
        >
      </template>
    </WorkCard>
  </div>
</template>
