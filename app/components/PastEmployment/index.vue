<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { PAST_EMPLOYMENT } from "./config";

const isDesktop = useMediaQuery("(min-width: 769px)");
</script>

<template>
  <h2 class="font-semibold mb-3">Past employment</h2>
  <p>
    I’ve worked on both client projects and long-term product teams,
    collaborating across disciplines and international environments.
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
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    <WorkCard
      v-for="item in PAST_EMPLOYMENT.filter((employment) => employment.isWork)"
      :key="item.title"
      :date="item.date"
      :title="item.title"
      :techStack="item.techStack || []"
      :image="item.image || ''"
      :bgColor="item.bgColor || ''"
      :url="item.url || ''"
      :summary="item.summary || ''"
      :highlights="item.highlights || []"
    />
    <WorkCard
      :key="'your-business'"
      date="2026"
      title="Your business"
      summary="I’m open to new frontend roles and product-focused projects. If you’re building something meaningful and need experienced frontend support, let’s talk."
      :techStack="['Web development']"
      bgColor="#FFF"
    >
      <template #image>
        <div
          class="w-full h-[200px] md:h-[450px] object-cover border-dashed border-2 border-gray-300"
        >
          <h3
            class="font-bold flex justify-center items-center h-full text-center"
          >
            Open to new opportunities
          </h3>
        </div>
      </template>
      <template #cta>
        <ContactDrawer />
      </template>
    </WorkCard>
  </div>
</template>
