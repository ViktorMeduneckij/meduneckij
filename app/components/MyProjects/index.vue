<template>
  <h2 class="font-semibold mb-3">My projects</h2>
  <p class="mb-12">
    I love coding, learning new technologies and building products. Here are
    some of my favorite projects that I'm proud of.
  </p>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-1/2">
      <WorkCard
        date="2025"
        title="Vaikasmieste.lt"
        description="Vaikasmieste.lt is a side project aimed towards Lithuanian parents. It helps parents find baby changing stations in public fast and with ease. Main feature of the project- an interactive maps with over 150 locations mapped on it with type, community comments and more."
        :techStack="[
          'Nuxt.js',
          'Vue.js',
          'TypeScript',
          'Supabase',
          'Nitro',
          'Google Maps',
        ]"
        image="/assets/vaikasmieste.png"
        bgColor="#fff"
        url="https://viktormeduneckij.com"
      />
    </div>
    <div class="w-full md:w-1/2">
      <WorkCard
        date="2021"
        title="BigBonkTour.com"
        description="BigBonkTour was a pet project of my to scratch my creative itch of writing and to see how far can I push traffic through organic SEO. Although project itself is not complicated, I focused a lot on gret web performance scores, SEO optimization and SSR. Sadly in the end I ran out of motivation and time to write articles, but at that point I was steadily generating an acceptable amount of unique visits per month from organic search. Now the project is shut down, but the code is still available on GitHub."
        :techStack="['Gatsby', 'React', 'GraphQL', 'Markdown']"
        image="/assets/bigbonktour.png"
        bgColor="#fff"
        url="https://github.com/ViktorMeduneckij/BigBonkTour"
      />
    </div>
  </div>
</template>
