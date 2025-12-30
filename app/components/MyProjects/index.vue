<script setup lang="ts">
import { PROJECTS } from "./config";
</script>

<template>
  <h2 class="font-semibold mb-3">My projects</h2>
  <p>
    I love coding, learning new technologies and building products. Here are
    some of my favorite projects that I'm proud of.
  </p>
  <div class="flex flex-col md:flex-row gap-8">
    <div
      v-for="project in PROJECTS"
      :key="project.title"
      class="w-full md:w-1/2"
    >
      <ProjectCard v-bind="project" :key="project.title" />
    </div>
  </div>
</template>
