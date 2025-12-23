<script setup lang="ts">
import { PROJECTS } from "./config";
</script>

<template>
  <h2 class="font-semibold mb-3">My projects</h2>
  <p class="mb-12">
    I love coding, learning new technologies and building products. Here are
    some of my favorite projects that I'm proud of.
  </p>
  <div class="flex flex-col md:flex-row gap-8">
    <div
      v-for="project in PROJECTS"
      :key="project.title"
      class="w-full md:w-1/2"
    >
      <WorkCard
        :date="project.date"
        :title="project.title"
        :summary="project.summary"
        :highlights="project.highlights"
        :techStack="project.techStack"
        :image="project.image"
        :bgColor="project.bgColor"
        :url="project.url"
        :border="false"
      >
        <template #cta>
          <UButton
            icon="i-simple-icons:github"
            target="_blank"
            class="mt-2"
            size="xl"
            :to="project.githubUrl"
            >View code on GitHub
          </UButton>
        </template>
      </WorkCard>
    </div>
  </div>
</template>
